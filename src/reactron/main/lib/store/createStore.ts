import { ipcMain } from 'electron';
import log from '@main/lib/log';
import channels from '@constants/channels';

import { Action, Listener, Reducer, State } from './store.types';

const createStore = (reducer: Reducer) => {
  let currentState: State = {};
  const listeners: Array<Listener> = [];

  function dispatch(action: Action) {
    if (action.type !== 'init') {
      log.store(action.type, action.payload);
    }

    currentState = reducer(currentState, action);

    listeners.forEach(({ target, channel, subscribed }: Listener) => {
      log.app('info', 'Sending data to ' + target.id + ' on channel ' + channel );

      const win = currentState.windows.refs[target.id];
      if (win) {
        win.ref.webContents.send(channel, 'subscribed');
      }
    });
  }

  ipcMain.on(channels.state.subscribe, (_event, { source, payload }) => {
    listeners.push({
      target: { id: source.id },
      channel: payload.channel,
      subscribed: payload.subscribe
    });
  });

  // function subscribe() {
  //   console.log('..subscribe()');
  // }
  //
  // function unsubscribe() {
  //   console.log('..unsubscribe()');
  // }

  function getState() {
    return currentState;
  }

  dispatch({ type: 'init', payload: {} });

  return {
    dispatch, getState
  }
}

export default createStore;

import { ipcMain } from 'electron';
import log from '@main/lib/log';
import channels from '@constants/channels';
import deepFind from './utils/deepFind';

import { Action, Listener, Reducer, State } from '~types/store';

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

      const win = deepFind(currentState, `windows.refs.${target.id}`);

      // if !win remove listener
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

  ipcMain.on(channels.state.get, (_event, { source, payload, returnChannel }) => {
    const data = (payload.path)
      ? deepFind(currentState, payload.path, true)
      : currentState;

    const win = deepFind(currentState, `windows.refs.${source.id}`);

    if (win) {
      win.ref.webContents.send(returnChannel, data);
    }
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

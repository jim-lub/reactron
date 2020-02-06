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

    listeners.forEach(({ target, path, returnChannel }: Listener) => {
      log.app('info', 'Sending data to ' + target.id + ' on channel ' + returnChannel );

      const win = deepFind(currentState, `_windows.refs.${target.id}`);
      const data = (path)
        ? deepFind(currentState, path)
        : currentState;
      // if !win remove listener
      if (win) {
        win.ref.webContents.send(returnChannel, data);
      }
    });
  }

  ipcMain.on(channels.state.subscribe, (_event, { source, payload }) => {
    listeners.push({
      target: { id: source.id },
      path: payload.pathToProperty,
      returnChannel: payload.returnChannel
    });
  });

  ipcMain.on(channels.state.get, (_event, { source, payload }) => {
    const data = (payload.pathToProperty)
      ? deepFind(currentState, payload.pathToProperty, true)
      : currentState;

    const win = deepFind(currentState, `_windows.refs.${source.id}`);

    if (win) {
      win.ref.webContents.send(payload.returnChannel, data);
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

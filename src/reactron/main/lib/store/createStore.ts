import { ipcMain } from 'electron';
import log from '@main/lib/log';
import channels from '@constants/channels';
import deepFind from './utils/deepFind';

import { Action, Listener, Reducer, State, StoreFn } from '~types/store';

const createStore = (reducer: Reducer) => {
  let currentState: State = {};
  let listeners: Array<Listener> = [];

  /**
  * dispatch()
  * ...
  *
  **/
  function dispatch({ type, payload }: StoreFn.Dispatch) {
    if (!type) throw new Error(`%NO_TYPE_SPECIFIED_PLACEHOLDER%`);
    if (!payload) console.warn(`%NO_PAYLOAD_PLACEHOLDER%`);

    currentState = reducer(currentState, { type, payload });

    if (type !== 'init') {
      log.store(type, payload || {});
    }

    publish();
  }

  /**
  * get()
  * ...
  *
  **/
  function get({ source, payload }: StoreFn.Get) {
    const { returnChannel, pathToProperty } = payload;

    const win = deepFind(currentState, `_windows.refs.${source.id}`);
    const data = (pathToProperty)
      ? deepFind(currentState, pathToProperty)
      : currentState;

    if (win) {
      win.ref.webContents.send(returnChannel, data);
    }
  }

  /**
  * subscribe()
  * ...
  *
  **/
  function subscribe({ source, payload }: StoreFn.Subscribe) {
    const { returnChannel, pathToProperty } = payload;

    listeners.push({
      target: {
        id: source.id
      },
      pathToProperty,
      returnChannel
    });

    const win = deepFind(currentState, `_windows.refs.${source.id}`);
    const data = (pathToProperty)
      ? deepFind(currentState, pathToProperty)
      : currentState;

    if (win) {
      win.ref.webContents.send(returnChannel, data);
    }
  }

  /**
  * unsubscribe()
  * ...
  *
  **/
  function unsubscribe({ source, payload }: StoreFn.Unsubscribe) {
    console.log(`unsubscribe ${source.id}: '${payload.type}'`);
  }

  /**
  * getState()
  * ...
  *
  **/
  function publish() {
    const listenersClone = listeners.filter(({ target, pathToProperty, returnChannel }: Listener, index) => {
      const win = deepFind(currentState, `_windows.refs.${target.id}`);
      const data = (pathToProperty)
        ? deepFind(currentState, pathToProperty)
        : currentState;

      if (win) {
        log.app('info', 'Sending data to ' + target.id + ' on channel ' + returnChannel );
        win.ref.webContents.send(returnChannel, data);
      }

      return (win) ? true : false;
    });

    listeners = listenersClone;
  }

  /**
  * getState()
  * ...
  *
  **/
  function getState() {
    return currentState;
  }


  /**
  * eventListeners
  * ...
  *
  **/
  ipcMain.on(channels.store.get, (_event, args) => get(args));
  ipcMain.on(channels.store.subscribe, (_event, args) => subscribe(args));
  ipcMain.on(channels.store.unsubscribe, (_event, args) => unsubscribe(args));

  dispatch({ type: 'init', payload: {} });

  return {
    dispatch,
    subscribe,
    unsubscribe,
    getState
  };
}

export default createStore;

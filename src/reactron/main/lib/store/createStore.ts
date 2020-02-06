import { ipcMain } from 'electron';
import log from '@main/lib/log';
import channels from '@constants/channels';
import {  deepFind, shallowCompare } from './utils';

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
    const value = (pathToProperty)
      ? deepFind(currentState, pathToProperty)
      : currentState;

    if (win) {
      win.ref.webContents.send(returnChannel, value);
    }
  }

  /**
  * subscribe()
  * ...
  *
  **/
  function subscribe({ source, payload }: StoreFn.Subscribe) {
    const { returnChannel, pathToProperty } = payload;

    const win = deepFind(currentState, `_windows.refs.${source.id}`);
    const value = (pathToProperty)
      ? deepFind(currentState, pathToProperty)
      : currentState;

    listeners.push({
      target: {
        id: source.id
      },
      pathToProperty,
      returnChannel,
      previousValue: value
    });

    if (win) {
      win.ref.webContents.send(returnChannel, value);
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
  * publish()
  * This function will loop over the `listeners` array and does a shallow compare
  * between the previous send value and the current value. If the data has changed
  * the publisher will try to send the new value to the renderer window. If the
  * reference to the window doesnt't exist the listener will be removed from the
  * array.
  **/
  function publish() {
    const listenersClone = listeners.map(({ target, pathToProperty, returnChannel, previousValue }: Listener) => {

      const win = deepFind(currentState, `_windows.refs.${target.id}`);
      const currentValue = (pathToProperty)
        ? deepFind(currentState, pathToProperty)
        : currentState;
      const untouched = shallowCompare(previousValue, currentValue);

      if (win && !untouched) {
        log.app('info', 'Sending data to ' + target.id + ' on channel ' + returnChannel );
        win.ref.webContents.send(returnChannel, currentValue);
      }

      return {
        target,
        pathToProperty,
        returnChannel,
        previousValue: (!untouched) ? currentValue : previousValue,
        removeListener: (!win) ? true : false
      }
    }).filter(({ removeListener }) => !removeListener);

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

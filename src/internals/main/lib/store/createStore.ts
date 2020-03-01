import { ipcMain } from 'electron';

import log from '@main/lib/cli-logger';
import {  deepFind, shallowCompare } from './utils';

import { Listener, Reducer, State, Store } from '~types/store.types';
import channels from '@constants/channels';

const createStore = (reducer: Reducer<any>) => {
  let currentState: State = {};
  let listeners: Array<Listener> = [];

  /**
  * dispatch()
  * ...
  *
  **/
  function dispatch({ source = { id: '@internal-main'}, type, payload = {} }: Store.Dispatch) {
    if (!type) throw new Error(`%NO_TYPE_SPECIFIED_PLACEHOLDER%`);
    if (!payload) console.warn(`%NO_PAYLOAD_PLACEHOLDER%`);

    log.store(source, type, payload)
    currentState = reducer(currentState, { type, payload });

    publish();
  }

  /**
  * get()
  * This function can be used to get a value from the store without the hassle
  * of subscribing and unsubscribing. Once the value is retrieved it will be send
  * to the renderer. Tip: use an ipcRenderer.once() on the receiving end to auto
  * remove the listener once the value is received.
  **/
  function get({ source, payload }: Store.Get) {
    const { listenerChannel, pathToProperty } = payload;

    const win = deepFind(currentState, `__.windows.refs.${source.id}`);
    const value = (pathToProperty)
      ? deepFind(currentState, pathToProperty)
      : currentState;

    if (win) {
      win.ref.webContents.send(listenerChannel, value);
    }
  }

  /**
  * subscribe()
  * Use this function to setup a listener.
  **/
  function subscribe({ source, payload }: Store.Subscribe) {
    const { listenerChannel, pathToProperty } = payload;

    const win = deepFind(currentState, `__.windows.refs.${source.id}`);
    const value = (pathToProperty)
      ? deepFind(currentState, pathToProperty)
      : currentState;

    listeners.push({
      target: {
        id: source.id
      },
      pathToProperty,
      listenerChannel,
      previousValue: value
    });

    if (win) {
      win.ref.webContents.send(listenerChannel, value);
    }
  }

  /**
  * unsubscribe()
  * Call this function to remove listener(s) from the `listeners` array. It will
  * remove all listeners matching the `windowId` and `listenerChannel`. This can
  * cause side effects if you re-use the same listenerChannel, so it's advised
  * to generate unique channel names when working with dynamic content.
  **/
  function unsubscribe({ source, payload }: Store.Unsubscribe) {
    if (payload.listenerChannel === '___EVERY___') {
      // delete all subscribtions for window
    }

    listeners = listeners.filter(({ target, listenerChannel }) =>
      !(target.id === source.id) &&
      !(listenerChannel === payload.listenerChannel)
    );
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
    const listenersClone = listeners.map(({ target, pathToProperty, listenerChannel, previousValue }: Listener) => {

      const win = deepFind(currentState, `__.windows.refs.${target.id}`);
      const currentValue = (pathToProperty)
        ? deepFind(currentState, pathToProperty)
        : currentState;
      const untouched = shallowCompare(previousValue, currentValue);

      if (win && !untouched) {
        win.ref.webContents.send(listenerChannel, currentValue);
      }

      return {
        target,
        pathToProperty,
        listenerChannel,
        previousValue: (!untouched) ? currentValue : previousValue,
        removeListener: (!win) ? true : false
      }
    }).filter(({ removeListener }) => !removeListener);

    listeners = listenersClone;
  }

  /**
  * getState()
  * Returns the current state.
  **/
  function getState() {
    return currentState;
  }


  /**
  * eventListeners
  * Setup event listeners to allow usage of store functions from outside the main process.
  **/
  ipcMain.on(channels.store.dispatch, (_event, args) => dispatch(args));
  ipcMain.on(channels.store.get, (_event, args) => get(args));
  ipcMain.on(channels.store.subscribe, (_event, args) => subscribe(args));
  ipcMain.on(channels.store.unsubscribe, (_event, args) => unsubscribe(args));

  // Dispatching an action to setup initial state tree
  dispatch({ type: 'INITIALIZE', payload: {} });

  // Export functions to be used
  return {
    dispatch,
    subscribe,
    unsubscribe,
    getState
  };
}

export default createStore;

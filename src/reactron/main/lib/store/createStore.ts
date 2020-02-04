import log from '@main/lib/log';
import { Action, Reducer, State } from './store.types';

const createStore = (reducer: Reducer) => {
  let currentState = {};
  const listeners = [];

  function dispatch(action: Action) {
    if (action.type !== 'init') {
      log.store(action.type, action.payload);
    }

    currentState = reducer(currentState, action);
  }

  function subscribe() {
    console.log('..subscribe()');
  }

  function unsubscribe() {
    console.log('..unsubscribe()');
  }

  function getState() {
    return currentState;
  }

  dispatch({ type: 'init', payload: {} });

  return {
    dispatch, subscribe, unsubscribe, getState
  }
}

export default createStore;

import { Action, Reducer, State } from './store.types';

const createStore = (reducer: Reducer) => {
  let currentState = {};
  const listeners = [];

  function dispatch(action: Action) {
    currentState = reducer(currentState, action);
    console.log(currentState)
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

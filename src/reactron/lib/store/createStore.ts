import { Action, Reducer, State } from './store.types';

const createStore = (reducer: Reducer, initialState?: State) => {
  let currentState = initialState || {};
  const listeners = [];

  function dispatch(action: Action) {
    console.log('..dispatch(): ' + action);

    currentState = reducer(currentState, action);
  }

  function subscribe() {
    console.log('..subscribe()');
  }

  function unsubscribe() {
    console.log('..unsubscribe()');
  }

  function getState() {
    console.log('..getState()');
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log(currentState);
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
  }

  return {
    dispatch, subscribe, unsubscribe, getState
  }
}

export default createStore;

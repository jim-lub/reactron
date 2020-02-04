import { Action, ReducerMap, State } from './store.types';

const combineReducers = (reducers: ReducerMap) => {
  return (currentState: State, action: Action) => {
    return Object.keys(reducers).reduce((newState: State, key: string) => {
      const reducer = reducers[key];
      newState[key] = reducer(currentState[key], action)

      return newState;
    }, {})
  }
}

export default combineReducers;

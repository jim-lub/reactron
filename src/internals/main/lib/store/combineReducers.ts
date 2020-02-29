import { Action, ReducerMap, State } from '~types/store.types';

const combineReducers = (reducers: ReducerMap) => {
  return (currentState: State = {}, action: Action<any>) => {
    return Object.keys(reducers).reduce((newState: State, key: string) => {
      const reducer = reducers[key];

      newState[key] = reducer(currentState[key], action);

      return newState;
    }, {})
  }
}

export default combineReducers;

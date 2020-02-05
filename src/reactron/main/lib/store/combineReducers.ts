import { Action, ReducerMap, State } from '~types/store';

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

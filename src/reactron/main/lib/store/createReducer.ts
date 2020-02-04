import { Action, ReducerMap, State } from './store.types';

const createReducer = (initialState: State) => (reducerMap: ReducerMap) => (state: State = initialState, action: Action) => {
  const reducer = reducerMap[ action.type ];

  return reducer
    ? reducer(state, action)
    : state
}

export default createReducer;

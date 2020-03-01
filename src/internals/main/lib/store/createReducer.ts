import { Action, ReducerMap, State } from '~types/store.types';

const createReducer = (initialState: State) => (reducerMap: ReducerMap) => (state: State = initialState, action: Action<any>) => {
  const reducer = reducerMap[ action.type ];
  
  return reducer
    ? reducer(state, action)
    : state
}

export default createReducer;

interface CombineReducers {
  [key: string]: (currentState: State, action: Action) => {}
}

interface State {
  [key: string]: any
}

interface Action {
  type: string,
  payload: {}
}

const combineReducers = (reducers: CombineReducers) => {
  return (currentState: State, action: Action) => {
    return Object.keys(reducers).reduce((newState: State, key: string) => {
      const reducer = reducers[key];

      newState[key] = reducer(currentState[key], action)

      return newState;
    }, {})
  }
}

export default combineReducers;

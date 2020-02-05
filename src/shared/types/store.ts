export interface Action {
  type: string,
  payload: {
    [key: string]: any
  }
}

export interface Listener {
  target: { id: string },
  channel: string,
  subscribed: string[]
}

export interface ReducerMap {
  [key: string]: Reducer
}

export interface State {
  [key: string]: any
}

export type Reducer = (state: State, action: Action) => State;

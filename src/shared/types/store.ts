export interface Action {
  type: string,
  payload?: {
    [key: string]: any
  }
}

export interface Listener {
  target: { id: string },
  pathToProperty: string | undefined,
  returnChannel: string
  previousValue?: any
}

export interface ReducerMap {
  [key: string]: Reducer
}

export interface State {
  [key: string]: any
}


export namespace StoreFn {
  export interface Dispatch {
    type: string,
    payload?: {
      [key: string]: any
    }
  }

  export interface Get {
    source: {
      id: string
    },
    payload: {
      pathToProperty?: string,
      returnChannel: string
    }
  }

  export interface Unsubscribe {
    source: {
      id: string
    },
    payload: {
      type: string
    }
  }

  export interface Subscribe {
    source: {
      id: string
    },
    payload: {
      pathToProperty?: string,
      returnChannel: string
    }
  }
}

export type Reducer = (state: State, action: Action) => State;

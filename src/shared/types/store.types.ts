export interface Action<Payload> {
  type: string,
  payload: Payload
}

export interface Listener {
  target: { id: string },
  pathToProperty: string | undefined,
  listenerChannel: string
  previousValue?: any
}

export interface ReducerMap {
  [key: string]: Reducer<any>
}

export interface State {
  [key: string]: any
}

export namespace Store {

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
      listenerChannel: string
    }
  }

  export interface Unsubscribe {
    source: {
      id: string
    },
    payload: {
      listenerChannel: string
    }
  }

  export interface Subscribe {
    source: {
      id: string
    },
    payload: {
      pathToProperty?: string,
      listenerChannel: string
    }
  }

}

export type Reducer<Payload> = (state: State, action: Action<Payload>) => State;

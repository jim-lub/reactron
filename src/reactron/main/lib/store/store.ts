export interface State {
  windows: { [uid:string ]: Window }
}

interface Window {
  name: string,
  ref: Electron.BrowserWindow,
  __props: {},
  props: {}
}

let state: State = { windows: {} };

export const dispatch = (fn: Function, payload: {}) => {
  state = fn(state, payload);
  // console.log('----------------------------------')
  // console.log('%o', state);
}

export const getState = () => state;

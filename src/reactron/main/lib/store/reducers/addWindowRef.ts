import { State } from '../store';

interface Payload {
  uid: string,
  alias: string,
  ref: Electron.BrowserWindow,
}

const addWindowRef = (state: State, payload: Payload) => {
  const { uid, alias, ref } = payload;

  return {
    ...state,
    windows: {
      ...state.windows,
      [uid]: {
        alias,
        ref,
        props: {},
        __props: {}
      }
    }
  }
}

export default addWindowRef;

import { State } from '../store';

interface Payload {
  uid: string
}

const removeWindowRef = (state: State, payload: Payload) => {
  const { uid: uid_to_remove } = payload;

  return {
    ...state,
    windowRefs: {
      ...Object.entries(state.windowRefs).reduce((obj, [uid, props]) => {
        if (uid === uid_to_remove) return obj;

        return obj = {
          ...obj,
          [uid]: props
        }
      }, {})
    }
  }
}

export default removeWindowRef;

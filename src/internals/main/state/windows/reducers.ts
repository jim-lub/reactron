import { State, Action } from '~types/store.types';
import { Payload } from './payload.types';

export const addWindowRef = (state: State, action: Action<Payload.AddWindowRef>) => {
  const { id, containerType, alias, ref } = action.payload;

  return {
    ...state,
    refs: {
      ...state.refs,
      [id]: {
        containerType,
        alias,
        ref
      }
    }
  }
}

export const removeWindowRef = (state: State, action: Action<Payload.RemoveWindowRef>) => {
  const { id: target_id } = action.payload;

  return {
    ...state,
    refs: Object.entries(state.refs).reduce((obj, [id, values]) => {
      if (id !== target_id) {
        obj = {
          ...obj,
          [id]: values
        }
      }
      return obj;
    }, {})
  }
}

import { State, Action } from '~types/store.types';
import { Payload } from './payload.types';

export const addWindowRef = (state: State, action: Action<Payload.AddWindowRef>) => {
  const { id, containerType, alias, ref, bounds, flags } = action.payload;

  return {
    ...state,
    refs: {
      ...state.refs,
      [id]: {
        containerType,
        alias,
        ref,
        bounds,
        flags
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

export const setWindowProps= (state: State, action: Action<Payload.SetWindowProps>) => {
  const { id, bounds, flags } = action.payload;

  console.log(flags)

  return {
    ...state,
    refs: {
      ...state.refs,
      [id]: {
        ...state.refs[id],
        bounds,
        flags
      }
    }
  }
}

import { State, Action } from '~types/store.types';
import { Payload } from './payload.types';

export const addWindowInstance = (state: State, action: Action<Payload.AddWindowInstance>) => {
  const { id, containerType, alias, ref, bounds, flags } = action.payload;

  return {
    ...state,
    instances: {
      ...state.instances,
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

export const removeWindowInstance = (state: State, action: Action<Payload.RemoveWindowInstance>) => {
  const { id: target_id } = action.payload;

  return {
    ...state,
    instances: Object.entries(state.instances).reduce((obj, [id, values]) => {
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

  return {
    ...state,
    instances: {
      ...state.instances,
      [id]: {
        ...state.instances[id],
        bounds,
        flags
      }
    }
  }
}

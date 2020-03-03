import actionTypes from './actionTypes';
import { Payload } from './payload.types';

export const addWindowInstance = ({ id, containerType, alias, ref, bounds, flags }: Payload.AddWindowInstance) => ({
  type: actionTypes.addWindowInstance,
  payload: {
    id,
    containerType,
    alias,
    ref,
    bounds,
    flags
  }
});

export const removeWindowInstance = ({ id }: Payload.RemoveWindowInstance) => ({
  type: actionTypes.removeWindowInstance,
  payload: {
    id
  }
});

export const setWindowProps = ({ id, bounds, flags }: Payload.SetWindowProps) => ({
  type: actionTypes.setWindowProps,
  payload: {
    id,
    bounds,
    flags
  }
});

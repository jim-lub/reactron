import actionTypes from './actionTypes';
import { Payload } from './payload.types';

export const addWindowRef = ({ id, containerType, alias, ref, bounds, flags }: Payload.AddWindowRef) => ({
  type: actionTypes.addWindowRef,
  payload: {
    id,
    containerType,
    alias,
    ref,
    bounds,
    flags
  }
});

export const removeWindowRef = ({ id }: Payload.RemoveWindowRef) => ({
  type: actionTypes.removeWindowRef,
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

import actionTypes from './actionTypes';
import { Payload } from './payload.types';

export const addWindowRef = ({ id, containerType, alias, ref }: Payload.AddWindowRef) => ({
  type: actionTypes.addWindowRef,
  payload: {
    id,
    containerType,
    alias,
    ref,
  }
});

export const removeWindowRef = ({ id }: Payload.RemoveWindowRef) => ({
  type: actionTypes.removeWindowRef,
  payload: {
    id
  }
});

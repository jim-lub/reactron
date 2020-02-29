import actionTypes from './actionTypes';
import { Payload } from './payload.types';

export const addWindowRef = ({ id, type, alias, ref }: Payload.AddWindowRef) => ({
  type: actionTypes.addWindowRef,
  payload: {
    id,
    type,
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

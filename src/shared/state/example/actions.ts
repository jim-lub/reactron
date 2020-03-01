import actionTypes from './actionTypes';
import { Payload } from './payload.types';

export const setExampleNumber = ({ number }: Payload.SetExampleNumber) => ({
  type: actionTypes.setExampleNumber,
  payload: {
    number
  }
});

export const setExampleString = ({ string }: Payload.SetExampleString) => ({
  type: actionTypes.setExampleString,
  payload: {
    string
  }
});

export const setExampleObject = ({ object }: Payload.SetExampleObject) => ({
  type: actionTypes.setExampleObject,
  payload: {
    object
  }
});

export const setExampleArray = ({ array }: Payload.SetExampleArray) => ({
  type: actionTypes.setExampleArray,
  payload: {
    array
  }
});

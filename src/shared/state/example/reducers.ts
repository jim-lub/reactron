import { State, Action } from '~types/store.types';
import { Payload } from './payload.types';

export const setExampleNumber = (state: State, action: Action<Payload.SetExampleNumber>) => {
  const { number } = action.payload;

  return {
    ...state,
    exampleNumber: number
  }
}

export const setExampleString = (state: State, action: Action<Payload.SetExampleString>) => {
  const { string } = action.payload;

  return {
    ...state,
    exampleString: string
  }
}

export const setExampleObject = (state: State, action: Action<Payload.SetExampleObject>) => {
  const { object } = action.payload;

  return {
    ...state,
    exampleObject: object
  }
}

export const setExampleArray = (state: State, action: Action<Payload.SetExampleArray>) => {
  const { array } = action.payload;

  return {
    ...state,
    exampleArray: array
  }
}

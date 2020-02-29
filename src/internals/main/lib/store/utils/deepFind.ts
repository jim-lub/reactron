import { State } from '~types/store.types';

const deepFind = (state: State, path: string, strict?: boolean) => {
  const keys = path.split('.');
  let currentState: any = state;

  for (let i = 0; i < keys.length; i++) {
    const next = currentState[keys[i]];

    /**
    * By default deepFind will return `undefined` when a property cannot be found
    * in the state tree. There are multiple use cases in which it is imperative
    * that the property does exist; deepFind accepts a boolean as third parameter
    * which enables a strict mode when set to `true`. In strict mode encountering
    * `undefined` will result in an error being thrown.
    **/
    if (next == undefined && strict) throw new Error(`%INVALID_PATH_PLACEHOLDER%`);
    if (next == undefined && !strict) return undefined;

    currentState = currentState[keys[i]];
  }

  return currentState;
}

export default deepFind;

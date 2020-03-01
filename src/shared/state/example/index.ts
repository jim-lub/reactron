import { createReducer } from '@main/lib/store';

import actionTypes from './actionTypes';
import * as operations from './operations';
import * as reducers from './reducers';

const initialState = {
  exampleNumber: null,
  exampleString: '',
  exampleObject: {},
  exampleArray: []
}

export default createReducer(initialState)({
  [ actionTypes.setExampleNumber ]: (state, action) => reducers.setExampleNumber(state, action),
  [ actionTypes.setExampleString ]: (state, action) => reducers.setExampleString(state, action),
  [ actionTypes.setExampleObject ]: (state, action) => reducers.setExampleObject(state, action),
  [ actionTypes.setExampleArray ]: (state, action) => reducers.setExampleArray(state, action),
});

export const doSomething = operations.doSomething;

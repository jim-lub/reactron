import { ipcMain } from 'electron';

import { createReducer } from '@main/lib/store';
import channels from '@constants/channels';

import actionTypes from './actionTypes';
import * as operations from './operations';
import * as reducers from './reducers';

const initialState = {
  instances: {}
}

export default createReducer(initialState)({
  [ actionTypes.addWindowInstance ]: (state, action) => reducers.addWindowInstance(state, action),
  [ actionTypes.removeWindowInstance ]: (state, action) => reducers.removeWindowInstance(state, action),
  [ actionTypes.setWindowProps ]: (state, action) => reducers.setWindowProps(state, action),
});


// export functions to be used internally
export const createWindow = operations.createWindow;

// setup event listeners for clients
ipcMain.on(channels.window.open, (_event, props: any) => operations.createWindow(props));

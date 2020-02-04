import { ipcMain } from 'electron';

import { createReducer } from '@main/lib/store';
import channels from '@constants/channels';

import actionTypes from './actionTypes';
import * as operations from './operations';
import * as reducers from './reducers';

const initialState = {
  refs: {}
}

export default createReducer(initialState)({
  [ actionTypes.addWindowRef ]: (state, action) => reducers.addWindowRef(state, action),
  [ actionTypes.removeWindowRef ]: (state, action) => reducers.removeWindowRef(state, action),
});


ipcMain.on(channels.window.open, (_event, props: any) => operations.createWindow(props));

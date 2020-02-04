import { app } from 'electron';
import { default as openWindow } from '@main/windows/lib/openWindow';
import { combineReducers, createStore } from '@lib/store';

import windowsReducer from '@state/windows';

import './windows/listeners.ts';

const initialize = () => {
  const reducers = combineReducers({
    windows: windowsReducer
  })

  const { dispatch, subscribe, unsubscribe, getState } = createStore(reducers);

  dispatch({ type: 'windows:addRef', payload: { uid: '310290da', alias: 'launcher' } });
  getState();

  openWindow({ alias: 'launcher' });
}

app.on('ready', () => {
  initialize();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

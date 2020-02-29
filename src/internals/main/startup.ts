import '@main/store';
import '@main/state/windows';

import { app } from 'electron';

import { createWindow } from '@main/state/windows';

const initialize = () => {
  createWindow({
    source: { id: 'initial' },
    payload: {
      type: 'reactron:window:devTools',
      width: 1200,
      height: 1000
    }
  });
}

app.on('ready', () => {
  initialize();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

import '@main/store';
import '@main/state/windows';

import { app } from 'electron';

import log from '@main/lib/cli-logger';
import { createWindow } from '@main/state/windows';

const initialize = () => {
  createWindow({
    source: { id: 'initial' },
    payload: {
      containerType: 'container:DevTools',
      width: 1200,
      height: 1000
    }
  });
}

app.on('ready', () => {
  log.app('success', 'Application initialized.');

  initialize();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

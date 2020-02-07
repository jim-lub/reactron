import { app } from 'electron';

import log from '@main/lib/log';
import createWindow from '@main/state/windows/operations/createWindow';

import '@main/store';
import '@main/state/windows';

const initialize = () => {
  createWindow({
    source: { id: 'initial' },
    payload: {
      type: 'reactron:window:devTools',
      width: 1200,
      height: 1000
    }
  });

  createWindow({
    source: { id: 'initial' },
    payload: {
      type: 'reactron:window:launcher',
      width: 400,
      height: 400
    }
  });
}

app.on('ready', () => {
  log.welcomeToReactron();
  log.app('info', 'Initializing');
  initialize();
  log.app('success', 'Ready!');
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

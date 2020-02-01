import { ipcMain } from 'electron';

import { openWindow } from '../operations';

ipcMain.on('window.open', () => {
  console.log('Window open command received..')
  openWindow()
});

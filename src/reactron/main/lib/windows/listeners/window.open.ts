import { ipcMain } from 'electron';
import channels from '@reactron/constants/channels';

import { openWindow } from '../operations';

ipcMain.on(channels.window.open, () => {
  console.log('Window open command received..')
  openWindow()
});

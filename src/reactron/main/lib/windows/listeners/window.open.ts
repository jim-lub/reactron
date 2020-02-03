import { ipcMain } from 'electron';
import channels from '@reactron/constants/channels';

import { openWindow } from '../operations';

ipcMain.on(channels.window.open, (_event, payload: any) => {
  console.log(payload)
  const { alias } = payload;
  console.log('Window open command received..')
  openWindow({ alias })
});

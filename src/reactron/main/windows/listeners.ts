import { ipcMain } from 'electron';
import channels from '@constants/channels';

import {
  // closeWindow,
  // maximizeWindow,
  // minimizeWindow,
  openWindow
} from './lib';

// ipcMain.on(
//   channels.window.close,
//   (_event, { uid }: { uid: string }) => closeWindow({ uid })
// );
//
// ipcMain.on(
//   channels.window.maximize,
//   (_event, { uid }: { uid: string }) => maximizeWindow({ uid })
// );
//
// ipcMain.on(
//   channels.window.minimize,
//   (_event, { uid }: { uid: string }) => minimizeWindow({ uid })
// );

ipcMain.on(
  channels.window.open,
  (_event, { alias }: { alias: string }) => openWindow({ alias })
);

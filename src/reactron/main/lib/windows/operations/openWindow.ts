import { BrowserWindow } from 'electron';

import { loadURL } from '../helpers';

const openWindow = () => {
  const window = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    },
    transparent: true,
    frame: false
  });

  loadURL({ window });

  // window.webContents.openDevTools();

  window.on('closed', () => console.log('Closed window'));
}

export default openWindow;

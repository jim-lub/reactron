import { BrowserWindow } from 'electron';
var path = require("path");
var isDev = require("electron-is-dev");

import { loadURL } from '../helpers';

const openWindow = () => {
  const window = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    }
  });

  loadURL({ window });

  window.on('closed', () => console.log('Closed window'));
}

export default openWindow;

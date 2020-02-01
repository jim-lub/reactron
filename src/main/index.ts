import { app, BrowserWindow, ipcMain } from 'electron';
var path = require("path");
var isDev = require("electron-is-dev");
import { doSomething } from './lib/helpers';
import './lib/browser/windows/listeners';

let win: any;

const createWindow = () => {
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      // webSecurity: false
    }
  });

  doSomething();

  win.loadURL(
    (isDev)
      ? 'http://localhost:8080/'
      : "file://" + path.resolve(__dirname, 'app', 'index.html')
  );
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

ipcMain.on('appmessage', () => {
  console.log('received message from app');
});


app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

import { app, BrowserWindow } from 'electron';
var path = require("path");
var isDev = require("electron-is-dev");

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

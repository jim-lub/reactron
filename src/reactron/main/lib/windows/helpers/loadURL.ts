import * as path from 'path';
import * as isDev from 'electron-is-dev';

interface Props {
  window: Electron.BrowserWindow
}

const loadURL = ({ window }: Props) => {
  window.loadURL(
    (isDev)
      ? 'http://localhost:8080/'
      : "file://" + path.resolve(__dirname, 'app', 'index.html')
  )
}

export default loadURL;

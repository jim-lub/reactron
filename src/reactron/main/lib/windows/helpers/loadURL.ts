import * as path from 'path';
import * as isDev from 'electron-is-dev';

interface Props {
  window: Electron.BrowserWindow,
  uid: string,
  alias: string
}

const loadURL = ({ window, uid, alias }: Props) => {
  const urlParams = `?uid=${uid}&alias=${alias}`;

  window.loadURL(
    (isDev)
      ? `http://localhost:8080${urlParams}`
      : "file://" + path.resolve(__dirname, 'app', `index.html${urlParams}`)
  )
}

export default loadURL;

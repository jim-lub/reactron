import * as path from 'path';
import * as isDev from 'electron-is-dev';

interface Props {
  win: Electron.BrowserWindow,
  id: string,
  type: string
}

const loadURL = ({ win, id, type }: Props) => {
  const urlParams = `?id=${id}&type=${type}`;

  win.loadURL(
    (isDev)
      ? `http://localhost:8080${urlParams}`
      : "file://" + path.resolve(__dirname, 'app', `index.html${urlParams}`)
  )
}

export default loadURL;

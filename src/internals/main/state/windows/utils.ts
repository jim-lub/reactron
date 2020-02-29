import * as path from 'path';
import * as isDev from 'electron-is-dev';

interface Props {
  id: string,
  type: string,
  windowRef: Electron.BrowserWindow,
}

export const loadContainer = ({ id, type, windowRef }: Props) => {
  const urlParams = `?id=${id}&type=${type}`;

  windowRef.loadURL(
    (isDev)
      ? `http://localhost:8080${urlParams}`
      : "file://" + path.resolve(__dirname, 'app', `index.html${urlParams}`)
  )
}

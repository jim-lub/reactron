import { BrowserWindow } from 'electron';
import { v4 as uuid } from 'uuid';
import * as isDev from 'electron-is-dev';

import { dispatch, reducers } from '@reactron/main/lib/store';
import { loadURL } from '../helpers';

interface Props {
  alias: string
}

const openWindow = ({ alias }: Props) => {
  const uid = uuid();

  const window = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false
  });

  loadURL({ window, uid, alias });

  window.webContents.openDevTools();

  dispatch(
    reducers.addWindowRef,
    {
      uid,
      alias: 'new_window',
      ref: window
    }
  );

  window.on('closed', () => dispatch( reducers.removeWindowRef, { uid }));
}

export default openWindow;

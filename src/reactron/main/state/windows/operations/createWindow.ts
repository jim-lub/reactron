import { BrowserWindow } from 'electron';
import { v4 as uuid } from 'uuid';

import { dispatch, unsubscribe } from '@main/store';
import * as actions from '../actions';
import * as utils from '../utils';

interface Props {
  source: {
    id: string
  },
  payload: {
    type: string,
    width: number,
    height: number
  }
}

const createWindow = ({ payload }: Props) => {
  const { type, width, height } = payload;
  const id = uuid();

  const win = new BrowserWindow({
    width,
    height,
    webPreferences: {
      nodeIntegration: true
    },
    // frame: false
  });

  win.webContents.openDevTools();

  utils.loadURL({
    id,
    type,
    win,
  });

  dispatch( actions.addWindowRef({ id, type, alias: '', ref: win }) );

  win.on('closed', () => {
    dispatch( actions.removeWindowRef({ id }) );
    unsubscribe({
      source: { id },
      payload: { type: 'all' }
    })
  });
}

export default createWindow;

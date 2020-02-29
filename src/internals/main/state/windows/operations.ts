import { BrowserWindow } from 'electron';
import { v4 as uuid } from 'uuid';

import { dispatch, unsubscribe } from '@main/store';

import * as actions from './actions';
import * as utils from './utils';

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

export const createWindow = ({ payload: { type, width, height } }: Props) => {
  const id = uuid();

  const windowRef = new BrowserWindow({
    width,
    height,
    webPreferences: {
      nodeIntegration: true
    },
    // frame: false
  });

  windowRef.webContents.openDevTools();

  utils.loadContainer({ id, type, windowRef });

  dispatch( actions.addWindowRef({ id, type, alias: '', ref: windowRef }) );

  windowRef.on('closed', () => {
    dispatch( actions.removeWindowRef({ id }) );

    unsubscribe({
      source: { id },
      payload: { listenerChannel: '___EVERY___' }
    })
  });
}

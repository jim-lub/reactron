import { BrowserWindow } from 'electron';
import { v4 as uuid } from 'uuid';

import { dispatch } from '@main/store';
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

  utils.loadURL({
    id,
    type,
    win,
  });

  dispatch( actions.addWindowRef({ id, type, alias: '', ref: win }) );

  win.on('closed', () => dispatch( actions.removeWindowRef({ id }) ));
}

export default createWindow;

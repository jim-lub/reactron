import { BrowserWindow } from 'electron';
import { v4 as uuid } from 'uuid';
import { debounce } from 'ts-debounce';

import { dispatch, unsubscribe } from '@main/store';

import * as actions from './actions';
import * as utils from './utils';

interface Props {
  source: {
    id: string
  },
  payload: {
    containerType: string,
    width: number,
    height: number
  }
}

export const createWindow = ({ payload: { containerType, width, height } }: Props) => {
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

  utils.loadContainer({ id, containerType, windowRef });

  dispatch( actions.addWindowInstance({
    id,
    containerType,
    alias: '',
    ref: windowRef,
    ...getWindowProps(windowRef)
  }) );

  const setWindowProps = debounce(
    () => dispatch( actions.setWindowProps({ id, ...getWindowProps(windowRef) }) ),
    100
  );

  windowRef.on('blur', () => setWindowProps());
  windowRef.on('focus', () => setWindowProps());
  windowRef.on('show', () => setWindowProps());
  windowRef.on('hide', () => setWindowProps());
  windowRef.on('maximize', () => setWindowProps());
  windowRef.on('unmaximize', () => setWindowProps());
  windowRef.on('minimize', () => setWindowProps());
  windowRef.on('restore', () => setWindowProps());
  windowRef.on('enter-full-screen', () => setWindowProps());
  windowRef.on('leave-full-screen', () => setWindowProps());
  windowRef.on('move', () => setWindowProps());

  windowRef.on('closed', () => {
    dispatch( actions.removeWindowInstance({ id }) );

    unsubscribe({
      source: { id },
      payload: { listenerChannel: '___EVERY___' }
    })
  });
}

const getWindowProps = (windowRef: Electron.BrowserWindow) => ({
  bounds: {
    ...windowRef.getBounds(),
    minimumSize: windowRef.getMinimumSize(),
    maximumSize: windowRef.getMaximumSize()
  },
  flags: {
    isFocused: windowRef.isFocused(),
    isVisible: windowRef.isVisible(),
    isModal: windowRef.isModal(),
    isMaximized: windowRef.isMaximized(),
    isMinimized: windowRef.isMinimized(),
    isFullScreen: windowRef.isFullScreen(),
    isNormal: windowRef.isNormal(),

    isResizable: windowRef.resizable,
    isMovable: windowRef.movable,
    isMaximizable: windowRef.maximizable,
    isMinimizable: windowRef.minimizable,
    isClosable: windowRef.closable
  }
});

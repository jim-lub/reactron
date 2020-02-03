import { default as createWindow } from './createWindow';
import { default as closeWindow } from './closeWindow';
import { default as maximizeWindow } from './maximizeWindow';
import { default as minimizeWindow } from './minimizeWindow';

const windowClient = {
  createWindow,
  closeWindow,
  maximizeWindow,
  minimizeWindow
}

export default windowClient;

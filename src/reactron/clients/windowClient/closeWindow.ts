import { ipcRenderer } from 'electron';
import channels from '@reactron/constants/channels';

const closeWindow = () => {
  const payload = {};

  ipcRenderer.send(channels.window.close, payload);
}

export default closeWindow;

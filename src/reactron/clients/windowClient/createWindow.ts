import { ipcRenderer } from 'electron';
import channels from '@reactron/constants/channels';

const openWindow = () => {
  const payload = {};

  ipcRenderer.send(channels.window.open, payload);
}

export default openWindow;

import { ipcRenderer } from 'electron';
import channels from '@reactron/constants/channels';

const minimizeWindow = ({ uid }: { uid: string }) => {
  const payload = {
    uid
  };

  ipcRenderer.send(channels.window.minimize, payload);
}

export default minimizeWindow;

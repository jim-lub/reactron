import { ipcRenderer } from 'electron';
import channels from '@reactron/constants/channels';

const closeWindow = ({ uid }: { uid: string }) => {
  const payload = {
    uid
  };

  ipcRenderer.send(channels.window.close, payload);
}

export default closeWindow;

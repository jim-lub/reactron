import { ipcRenderer } from 'electron';
import channels from '@reactron/constants/channels';

const maximizeWindow = ({ uid }: { uid: string }) => {
  const payload = {
    uid
  };

  ipcRenderer.send(channels.window.maximize, payload);
}

export default maximizeWindow;

import { ipcRenderer } from 'electron';
import channels from '@reactron/constants/channels';

interface Props {
  alias: string
}

const openWindow = ({ alias }: Props) => {
  const payload = {
    alias
  };

  ipcRenderer.send(channels.window.open, payload);
}

export default openWindow;

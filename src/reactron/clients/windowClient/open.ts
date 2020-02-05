import { ipcRenderer } from 'electron';
import channels from '@constants/channels';

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

const open = ({ source, payload }: Props) => {
  ipcRenderer.send(channels.window.open, {
    source,
    payload
  });
}

export default open;
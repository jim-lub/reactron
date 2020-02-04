import { ipcRenderer } from 'electron';
import channels from '@constants/channels';

interface Props {
  source: {
    id: string
  },
  payload: {
    channel: string,
    subscribe: string[]
  }
}

const subscribe = ({ source, payload }: Props) => {
  ipcRenderer.send(channels.state.subscribe, {
    source,
    payload
  });
}

export default subscribe;

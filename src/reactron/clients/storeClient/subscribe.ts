import { ipcRenderer } from 'electron';
import channels from '@constants/channels';

import { Source } from '~types/ipc';

interface Payload {
  channel: string,
  subscribe: string[]
}

interface Props {
  source: Source,
  payload: Payload
}

const subscribe = ({ source, payload }: Props) => {
  ipcRenderer.send(channels.state.subscribe, {
    source,
    payload
  });
}

export default subscribe;

import { ipcRenderer } from 'electron';
import { v4 as uuid } from 'uuid';
import channels from '@constants/channels';

interface Props {
  source: {
    id: string
  },
  payload: {
    path?: string
  }
}

const get = ({ source, payload }: Props) => new Promise((resolve, reject) => {
  const returnChannel = uuid();

  ipcRenderer.send(channels.state.get, {
    source,
    payload,
    returnChannel
  });

  ipcRenderer.once(returnChannel, (_event, result) => resolve(result));
});

export default get;

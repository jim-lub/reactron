import { ipcRenderer } from 'electron';

import { windowClient } from '@clients';
import channels from '@constants/channels';

interface Props {
  payload: {
    containerType: string,
    width: number,
    height: number
  }
}

const open = ({ payload }: Props) => {
  const { id: windowId } = windowClient.getStaticWindowProperties();

  ipcRenderer.send(channels.window.open, {
    source: {
      id: windowId
    },
    payload
  });
}

export default open;

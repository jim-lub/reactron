import { ipcRenderer } from 'electron';

import { windowClient } from '@clients';
import channels from '@constants/channels';

interface Props {
  target: {
    id: string
  }
}

const unmaximize = ({ target }: Props) => {
  const { id: windowId } = windowClient.getStaticWindowProperties();

  ipcRenderer.send(channels.window.unmaximize, {
    source: {
      id: windowId
    },
    target
  });
}

export default unmaximize;

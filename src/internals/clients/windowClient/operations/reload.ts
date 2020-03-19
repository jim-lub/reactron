import { ipcRenderer } from 'electron';

import { windowClient } from '@clients';
import channels from '@constants/channels';

interface Props {
  target: {
    id: string
  }
}

const reload = ({ target }: Props) => {
  const { id: windowId } = windowClient.getStaticWindowProperties();

  ipcRenderer.send(channels.window.reload, {
    source: {
      id: windowId
    },
    target
  });
}

export default reload;

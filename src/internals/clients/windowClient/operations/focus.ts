import { ipcRenderer } from 'electron';

import { windowClient } from '@clients';
import channels from '@constants/channels';

interface Props {
  target: {
    id: string
  }
}

const focus = ({ target }: Props) => {
  const { id: windowId } = windowClient.getWindowProperties();

  ipcRenderer.send(channels.window.open, {
    source: {
      id: windowId
    },
    target
  });
}

export default focus;

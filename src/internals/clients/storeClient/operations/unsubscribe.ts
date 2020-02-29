import { ipcRenderer } from 'electron';

import { windowClient } from '@clients/index';
import channels from '@constants/channels';

const unsubscribe = (listenerChannel: string) => {
  const { id: windowId } = windowClient.getWindowProperties();

  if (!windowId) throw new Error(`%NO_WINDOW_ID_PLACEHOLDER%`);
  if (!listenerChannel) throw new Error(`%NO_LISTENER_CHANNEL_PLACEHOLDER%`);

  ipcRenderer.send(channels.store.unsubscribe, {
    source: {
      id: windowId
    },
    payload: {
      listenerChannel
    }
  });
}

export default unsubscribe;

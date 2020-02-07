import { ipcRenderer } from 'electron';

import { windowClient } from '@clients/index';
import channels from '@constants/channels';

const subscribe = (listenerChannel: string, pathToProperty?: string) => {
  const { id: windowId } = windowClient.getWindowProperties();

  if (!windowId) throw new Error(`%NO_WINDOW_ID_PLACEHOLDER%`);
  if (!listenerChannel) throw new Error(`%NO_RETURN_CHANNEL_PLACEHOLDER%`);
  if (!pathToProperty) console.warn(`%NO_PATH_SPECIFIED_PLACEHOLDER%`);

  ipcRenderer.send(channels.store.subscribe, {
    source: {
      id: windowId
    },
    payload: {
      listenerChannel,
      pathToProperty
    }
  });
}

export default subscribe;

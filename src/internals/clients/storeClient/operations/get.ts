import { ipcRenderer } from 'electron';
import { v4 as uuid } from 'uuid';

import { windowClient } from '@clients';
import channels from '@constants/channels';

const get = (pathToProperty?: string) => new Promise((resolve) => {
  const { id: windowId } = windowClient.getWindowProperties();
  const listenerChannel = `store:listen-once:${ uuid() }`;

  if (!windowId) throw new Error(`%NO_WINDOW_ID_PLACEHOLDER%`);
  if (!pathToProperty) console.warn(`%NO_PATH_SPECIFIED_PLACEHOLDER%`);

  ipcRenderer.send(channels.store.get, {
    source: {
      id: windowId
    },
    payload: {
      listenerChannel,
      pathToProperty
    },
  });

  ipcRenderer.once(listenerChannel, (_event, result) => resolve(result));
});

export default get;

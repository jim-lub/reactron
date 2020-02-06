import { ipcRenderer } from 'electron';
import { v4 as uuid } from 'uuid';

import { windowClient } from '@clients/index';
import channels from '@constants/channels';

const get = (pathToProperty?: string) => new Promise((resolve) => {
  const { id: windowId } = windowClient.getWindowProperties();
  const returnChannel = `store:listen-once:${ uuid() }`;

  if (!windowId) throw new Error(`%NO_WINDOW_ID_PLACEHOLDER%`);
  if (!pathToProperty) console.warn(`%NO_PATH_SPECIFIED_PLACEHOLDER%`);

  ipcRenderer.send(channels.state.get, {
    source: {
      id: windowId
    },
    payload: {
      returnChannel,
      pathToProperty
    },
  });

  ipcRenderer.once(returnChannel, (_event, result) => resolve(result));
});

export default get;

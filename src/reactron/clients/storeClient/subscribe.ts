import { ipcRenderer } from 'electron';

import { windowClient } from '@clients/index';
import channels from '@constants/channels';

const subscribe = (returnChannel: string, pathToProperty?: string) => {
  const { id: windowId } = windowClient.getWindowProperties();

  if (!windowId) throw new Error(`%NO_WINDOW_ID_PLACEHOLDER%`);
  if (!returnChannel) throw new Error(`%NO_RETURN_CHANNEL_PLACEHOLDER%`);
  if (!pathToProperty) console.warn(`%NO_PATH_SPECIFIED_PLACEHOLDER%`);

  ipcRenderer.send(channels.state.subscribe, {
    source: {
      id: windowId
    },
    payload: {
      returnChannel,
      pathToProperty
    }
  });

  return () => {
    // send unsubscribe message to main
    console.log('unsubscribe')
  };
}

export default subscribe;

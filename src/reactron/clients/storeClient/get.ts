import { ipcRenderer } from 'electron';
import { v4 as uuid } from 'uuid';
import channels from '@constants/channels';
import { getCurrentWindowId } from '@renderer/lib/utils';

const get = (path?: string) => new Promise((resolve) => {
  const windowId = getCurrentWindowId();
  const returnChannel = uuid();

  if (!windowId) throw new Error(`%NO_WINDOW_ID_PLACEHOLDER%`);

  ipcRenderer.send(channels.state.get, {
    source: {
      id: getCurrentWindowId()
    },
    payload: {
      path
    },
    returnChannel
  });

  ipcRenderer.once(returnChannel, (_event, result) => resolve(result));
});

export default get;

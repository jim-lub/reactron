import { ipcRenderer } from 'electron';

import { windowClient } from '@clients';
import channels from '@constants/channels';

import { Store } from '~types/store.types';

const dispatch = ({ type, payload }: Store.Dispatch) => {
  const { id: windowId } = windowClient.getStaticWindowProperties();

  if (!windowId) throw new Error(`%NO_WINDOW_ID_PLACEHOLDER%`);

  ipcRenderer.send(channels.store.dispatch, {
    source: {
      id: windowId
    },
    type,
    payload
  });
};

export default dispatch;

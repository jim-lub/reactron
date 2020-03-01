import { ipcRenderer } from 'electron';

const listen = (channel: string, callback: (_event: any, result: any) => void) => {
  ipcRenderer.on(channel, callback);

  if (!channel) throw new Error(`%NO_CHANNEL_PLACEHOLDER%`);
  if (!callback) throw new Error(`%NO_CALLBACK_PLACEHOLDER%`);

  return () => {
    ipcRenderer.removeListener(channel, callback);
  }
}

export default listen;

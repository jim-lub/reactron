import React, { useState, useEffect } from 'react';
import { ipcRenderer } from 'electron';

import { storeClient, windowClient } from '@clients/index';
import channels from '@constants/channels';
import windowTypes from '@constants/windowTypes';

const Launcher = ({ id }: { id: string }) => {
  const [dispatchCount, setDispatchCount] = useState(0);

  const handleClick = (type: string) => {
    windowClient.open({
      source: {
        id
      },
      payload: {
        type,
        width: 400,
        height: 400
      }
    });
  }

  const listChannels = () => {
    ipcRenderer.eventNames().forEach(channel => {
      const listeners = ipcRenderer.rawListeners(channel);
      console.log(channel);
      console.log(listeners)
    })
  }

  useEffect(() => {
    storeClient.subscribe({
      source: { id },
      payload: {
        channel: channels.state.listen,
        subscribe: ['windows', 'refs']
      }
    });
  }, []);

  function increment() {
    setDispatchCount(dispatchCount + 1)
  }

  useEffect(() => {

    const listener = ipcRenderer.on(channels.state.listen, increment);
    return () => {
      ipcRenderer.removeListener(channels.state.listen, increment);
    }
  }, [dispatchCount]);

  return (
    <>
      <h1>Launcher</h1>
      <h5>{ id }</h5>
      <br />
      <div style={{backgroundColor: '#e5e5e5', padding: '10px 5px'}}>{ dispatchCount }</div>
      <br />
      <button onClick={() => handleClick(windowTypes.devTools)}>DevTools</button>
      <button onClick={() => handleClick(windowTypes.launcher)}>Launcher</button>
      <button onClick={listChannels}>Log Channels</button>
    </>
  )
}

export default Launcher;

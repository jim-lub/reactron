import React, { useState, useEffect } from 'react';
import { ipcRenderer } from 'electron';

import { storeClient, windowClient } from '@clients/index';
import { types as windowTypes } from 'windows';

const Launcher = () => {
  const { id: windowId } = windowClient.getWindowProperties();
  const [value]: any = storeClient.useStore(`_windows.refs.${windowClient.getWindowProperties().id}`);
  // const [stateTree]: any = storeClient.useStore();

  const handleClick = (type: string) => {
    windowClient.open({
      source: {
        id: windowId
      },
      payload: {
        type,
        width: 800,
        height: 600
      }
    });
  }

  useEffect(() => {
    console.log('value', value);
  }, [value]);

  const handleGetClick = async () => {
    const result = await storeClient.get('_windows.refs');
    console.log(result);
  }

  const listChannels = () => {
    ipcRenderer.eventNames().forEach(channel => {
      const listeners = ipcRenderer.rawListeners(channel);
      console.log(channel);
      console.log(listeners)
    })
  }

  return (
    <div>
      <h1>Launcher</h1>
      <h5>{ windowId }</h5>
      <br />
        <div style={{backgroundColor: '#e5e5e5', padding: '10px 5px'}}></div>
      <br />
      <button onClick={() => handleClick(windowTypes.devTools)}>DevTools</button>
      <button onClick={() => handleClick(windowTypes.launcher)}>Launcher</button>
      <button onClick={listChannels}>Log Channels</button>
      <button onClick={handleGetClick}>Get</button>
    </div>
  )
}

export default Launcher;

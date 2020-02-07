import React from 'react';

import { WindowList } from './components/WindowList';
import { storeClient, windowClient } from '@clients/index';

const DevTools = () => {
  const { id: windowId } = windowClient.getWindowProperties();
  return (
    <>
      <h1>DevTools</h1>
      <h5>{ windowId }</h5>
      <div>
        <WindowList />
      </div>
    </>
  )
}

export default DevTools;

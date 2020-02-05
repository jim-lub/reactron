import React from 'react';

import { WindowList } from './components/WindowList';

const DevTools = ({ id }: { id: string }) => {
  return (
    <>
      <h1>DevTools</h1>
      <div>
        <WindowList />
      </div>
    </>
  )
}

export default DevTools;

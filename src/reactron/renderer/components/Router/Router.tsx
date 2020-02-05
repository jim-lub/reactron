import React, { Suspense } from 'react';

import { getUrlParams } from '@renderer/lib/utils';
import windowTypes from '@constants/windowTypes';

const DevTools = React.lazy(() => import('windows/DevTools'));
const Launcher = React.lazy(() => import('windows/Launcher'));

const Router = () => {
  const { id, type } = getUrlParams( window.location.href )

  if (!id || !type) {
    throw "Opening a window without an id or type is not allowed!"
  }

  return (
    <div style={{height: '100%', width: '100%', padding: 10, border: 'solid 10px #ddf542'}}>
      <Suspense fallback={<div>Loading...</div>}>
        { (type === windowTypes.devTools) ? <DevTools id={id} /> : null }
        { (type === windowTypes.launcher) ? <Launcher id={id} /> : null }
      </Suspense>
    </div>
  )
}

export default Router;

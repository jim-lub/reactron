import React, { Suspense } from 'react';

import windows from 'windows'
import { windowClient } from '@clients/index';

const Router = () => {
  const { type: windowType } = windowClient.getWindowProperties();

  if (!windowType) throw new Error(`%NO_WINDOW_TYPE_PLACEHOLDER%`);
  if (!windows[windowType]) throw new Error(`%WINDOW_TYPE_NO_EXIST_PLACEHOLDER%`);
  if (!windows[windowType].component) throw new Error(`%WINDOW_NO_COMPONENT_PLACEHOLDER%`);

  return (
    <div style={{height: '100%', width: '100%'}}>
      <Suspense fallback={<div>Loading...</div>}>
        {
          Object.entries(windows).map(([type, { component: Component, ...rest }]) => (
            (type === windowType)
              ? <Component key={windowType} />
              : null
          ))
        }
      </Suspense>
    </div>
  )
}

export default Router;

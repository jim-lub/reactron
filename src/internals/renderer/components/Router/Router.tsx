import React, { Suspense } from 'react';

import { windowClient } from '@clients';

import Containers, { ContainerTypes } from 'containers';

const Router = () => {
  const { containerType } = windowClient.getWindowProperties();

  if (!containerType) throw new Error(`%NO_WINDOW_TYPE_PLACEHOLDER%`);
  if (!Containers[containerType]) throw new Error(`%WINDOW_TYPE_NO_EXIST_PLACEHOLDER%`);
  if (!Containers[containerType].Component) throw new Error(`%WINDOW_NO_COMPONENT_PLACEHOLDER%`);

  return (
    <div style={{height: '100%', width: '100%'}}>
      <Suspense fallback={<div>Loading...</div>}>
        {
          Object.entries(Containers).map(([type, { Component, ...rest }]) => (
            (type === containerType)
              ? <Component key={containerType} />
              : null
          ))
        }
      </Suspense>
    </div>
  )
}

export default Router;

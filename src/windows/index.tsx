import React from 'react';

const DevTools = React.lazy(() => import('windows/DevTools'));
const Launcher = React.lazy(() => import('windows/Launcher'));

export const types = {
  devTools: 'reactron:window:devTools',
  launcher: 'reactron:window:launcher',
}

export default ({
  [types.devTools]: {
    displayName: 'DevTools',
    component: DevTools
  },

  [types.launcher]: {
    displayName: 'Launcher',
    component: Launcher
  }
})

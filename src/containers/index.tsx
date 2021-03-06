import React from 'react';

const DevTools = React.lazy(() => import('./DevTools/views'));
const Example = React.lazy(() => import('./Example/views'));

export const ContainerTypes = {
  DevTools : 'container:DevTools',
  Example  : 'container:Example'
}

export default ({
  [ ContainerTypes.DevTools ]: {
    displayName: 'DevTools',
    Component: DevTools
  },

  [ ContainerTypes.Example ]: {
    displayName: 'Example',
    Component: Example
  }
})

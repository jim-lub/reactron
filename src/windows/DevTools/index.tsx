import React, { useState } from 'react';

import {
  Tabs,

  StateTools,
  WindowTools
} from './components';

// import { windowClient } from '@clients/index';

import './css/index.scss'; // overwrite default styles

const devTools = [
  {
    tabName: 'Windows',
    component: WindowTools
  },

  {
    tabName: 'State',
    component: StateTools
  },
]

const DevTools = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabSwitch = (tabIndex: number) => setCurrentTabIndex(tabIndex);
  const Component = devTools[currentTabIndex].component;

  return (
    <div style={{height: '100%', width: '100%'}}>
      <Tabs
        tabs={(devTools.map(({ tabName }) => tabName))}
        currentTabIndex={currentTabIndex}
        onSwitch={handleTabSwitch}
      />

      <Component />
    </div>
  )
}

export default DevTools;

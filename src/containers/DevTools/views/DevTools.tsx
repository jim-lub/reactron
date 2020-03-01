import React from 'react';

import './css/index.scss';

import { CreateWindowModule } from './components';

const DevTools = () => {
  return (
    <div>
      <h1>DevTools Container</h1>
      <CreateWindowModule />
    </div>
  )
}

export default DevTools;

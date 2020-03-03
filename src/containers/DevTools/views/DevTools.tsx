import React, { useEffect } from 'react';
import Reactron from 'reactron';

import { CreateWindowModule } from './components';

import './css/index.scss';

const { useStore } = Reactron.clients.storeClient;

const DevTools = () => {
  const [windowInstances] = useStore('__.windows.instances');

  useEffect(() => {
    console.log( Object.keys(windowInstances).length, windowInstances );
  }, [windowInstances]);

  return (
    <div>
      <h1>DevTools Container</h1>
      <CreateWindowModule />
    </div>
  )
}

export default DevTools;

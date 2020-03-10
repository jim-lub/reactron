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
    <>
      <CreateWindowModule />

      <section>
        <ol className="list">
          {
            Object.entries(windowInstances).map(([id, props]) => {
              return (
                <li key={id}>
                  { id }
                </li>
              )
            })
          }
        </ol>
      </section>
    </>
  )
}

export default DevTools;

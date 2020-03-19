import React, { useEffect } from 'react';
import Reactron from 'reactron';

import {
  CreateWindowModule,
  WindowDetails
} from './components';

import { Window } from '~types/window.types';

import './css/index.scss';

const { useStore } = Reactron.clients.storeClient;

const DevTools = () => {
  const [windowInstances] = useStore<{ [id: string]: Window.Instance }>('__.windows.instances', {});

  useEffect(() => {
    console.log( Object.keys(windowInstances).length, windowInstances );
  }, [windowInstances]);

  return (
    <>
      <CreateWindowModule />

      {
        Object.entries(windowInstances).map(([id, props]) => {
          return (
            <WindowDetails
              key={id}
              id={id}
              alias={props.alias}
              containerType={props.containerType}
              bounds={props.bounds}
              flags={props.flags}
            />
          )
        })
      }
    </>
  )
}

export default DevTools;

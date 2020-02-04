import React from 'react';

import { windowClient } from '@clients/index';
import windowTypes from '@constants/windowTypes';

const Launcher = ({ id }: { id: string }) => {
  const handleClick = (type: string) => {
    windowClient.open({
      source: {
        id
      },
      payload: {
        type,
        width: 400,
        height: 400
      }
    });
  }

  return (
    <>
      <h1>Launcher</h1>
      <h5>{ id }</h5>
      <br />
      <button onClick={() => handleClick(windowTypes.devTools)}>DevTools</button>
      <button onClick={() => handleClick(windowTypes.launcher)}>Launcher</button>
    </>
  )
}

export default Launcher;

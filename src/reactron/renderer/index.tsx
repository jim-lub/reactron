import React from 'react';
import ReactDOM from 'react-dom';
// import { Root } from '@components';

import { windowClient } from '@clients/index';
import windowTypes from '@constants/windowTypes';

const Root = () => {
  console.log(window.location.href);
  
  const handleClick = () => {
    windowClient.open({
      source: {
        id: '@root-c8s8a0w92'
      },
      payload: {
        type: windowTypes.launcher,
        width: 400,
        height: 400
      }
    });
  }

  return (
    <>
      <h1>Stuff</h1><br />
      <button onClick={handleClick}>Open</button>
    </>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

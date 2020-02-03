import React from 'react';
import Reactron from 'reactron';

const Launcher = ({ uid }: { uid: string }) => {
  const handleClickOne = () => {
    Reactron.windowClient.createWindow({ alias: 'launcher' });
  }

  const handleClickTwo = () => {
    Reactron.windowClient.createWindow({ alias: 'devtools' });
  }

  const logClick = () => {
    // const state = Reactron.storeClient.getState();
    // console.log(state)
  }

  return (
    <div style={{padding: 10}}>
      <button onClick={handleClickOne}>Open new `Launcher` window</button>
      <button onClick={handleClickTwo}>Open new `DevTools` window</button>
      <button onClick={logClick}>LOG STATE</button>
      <span>{ uid }</span>
    </div>
    )
  }

  export default Launcher;

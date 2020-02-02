import React from 'react';
import Reactron from 'reactron';

const Launcher = () => {
  const handleClick = () => {
    Reactron.windowClient.createWindow();
  }

  return (
    <div>
      Content.. whattttttt!?!?!
      <button onClick={handleClick}>Open Window</button>
    </div>
    )
  }

  export default Launcher;

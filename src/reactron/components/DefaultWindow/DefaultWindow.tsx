import React from 'react';
import Reactron from 'reactron';

import { Titlebar } from '@reactron/components';

interface Props {
  uid: string,
  alias: string,
  children: React.ReactChild
}

const DefaultWindow = ({ uid, alias, children: appRoot }: Props) => {
  const handleMinimize = () => {
    Reactron.windowClient.minimizeWindow({ uid });
  }

  const handleMaximize = () => {
    Reactron.windowClient.maximizeWindow({ uid });
  }

  const handleClose = () => {
    Reactron.windowClient.closeWindow({ uid });
  }

  return (
    <div className="reactron-default-window__container">
      <div className="reactron-default-window__grid">
        <div className="reactron-default-window__grid-titlebar">
          <Titlebar title={`${alias} // ${uid}`} onMaximize={handleMaximize} onMinimize={handleMinimize} onClose={handleClose}/>
        </div>

        <div className="reactron-default-window__grid-app-root">
          { appRoot }
        </div>
      </div>
    </div>
  );
}

export default DefaultWindow;

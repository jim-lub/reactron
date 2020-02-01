import React from 'react';

import { Titlebar } from '../';

interface Props {
  children: React.ReactChild
}

const DefaultWindow = ({ children: appRoot }: Props) => {
  return (
    <div className="reactron-default-window__container">
      <div className="reactron-default-window__grid">
        <div className="reactron-default-window__grid-titlebar">
          <Titlebar title="Reactron: Launcher"/>
        </div>

        <div className="reactron-default-window__grid-app-root">
          { appRoot }
        </div>
      </div>
    </div>
  );
}

export default DefaultWindow;

import React from 'react';

import { Titlebar } from '@reactron/components';

interface Props {
  uid: string,
  alias: string,
  children: React.ReactChild
}

const DefaultWindow = ({ uid, alias, children: appRoot }: Props) => {
  return (
    <div className="reactron-default-window__container">
      <div className="reactron-default-window__grid">
        <div className="reactron-default-window__grid-titlebar">
          <Titlebar title={`${alias} // ${uid}`}/>
        </div>

        <div className="reactron-default-window__grid-app-root">
          { appRoot }
        </div>
      </div>
    </div>
  );
}

export default DefaultWindow;

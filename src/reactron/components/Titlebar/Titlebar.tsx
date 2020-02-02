import React from 'react';

import { ReactComponent as CloseIcon } from '@reactron/assets/icons/window/close-2.svg';
import { ReactComponent as MaximizeIcon } from '@reactron/assets/icons/window/maximize-2.svg';
import { ReactComponent as UnMaximizeIcon } from '@reactron/assets/icons/window/unmaximize-2.svg';
import { ReactComponent as MinimizeIcon } from '@reactron/assets/icons/window/minimize-2.svg';

interface Props {
  title: string
}

const Titlebar = ({ title }: Props) => {
  return (
    <div className="reactron-titlebar__container">
      <div className="reactron-titlebar__title-wrapper">{ title }</div>

      <div className="reactron-title__button">
        <MinimizeIcon className="reactron-title__button-icon"/>
      </div>

      <div className="reactron-title__button">
        <MaximizeIcon className="reactron-title__button-icon"/>
      </div>

      <div className="reactron-title__button warning">
        <CloseIcon className="reactron-title__button-icon"/>
      </div>

      {/*<CloseIcon style={{width: 24, height: 24}}/>*/}
    </div>
  );
}

export default Titlebar;

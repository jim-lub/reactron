import React from 'react';

import { ReactComponent as CloseIcon } from '@reactron/assets/icons/window/close-2.svg';
import { ReactComponent as MaximizeIcon } from '@reactron/assets/icons/window/maximize-2.svg';
import { ReactComponent as UnMaximizeIcon } from '@reactron/assets/icons/window/unmaximize-2.svg';
import { ReactComponent as MinimizeIcon } from '@reactron/assets/icons/window/minimize-2.svg';

interface Props {
  title: string,
  onClose: () => void,
  onMaximize: () => void,
  onMinimize: () => void,
}

const Titlebar = ({ title, onClose, onMaximize, onMinimize }: Props) => {
  return (
    <div className="reactron-titlebar__container">
      <div className="reactron-titlebar__title-wrapper">{ title }</div>

      <div className="reactron-title__button" onClick={onMinimize}>
        <MinimizeIcon className="reactron-title__button-icon"/>
      </div>

      <div className="reactron-title__button" onClick={onMaximize}>
        <MaximizeIcon className="reactron-title__button-icon"/>
      </div>

      <div className="reactron-title__button warning" onClick={onClose}>
        <CloseIcon className="reactron-title__button-icon"/>
      </div>

      {/*<CloseIcon style={{width: 24, height: 24}}/>*/}
    </div>
  );
}

export default Titlebar;

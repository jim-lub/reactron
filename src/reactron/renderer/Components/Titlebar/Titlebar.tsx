import React from 'react';

import { ReactComponent as CloseIcon } from 'renderer/assets/icons/window/close.svg';
// import { ReactComponent as MaximizeIcon } from 'renderer/assets/icons/window/maximize.svg';
// import { ReactComponent as MinimizeIcon } from 'renderer/assets/icons/window/minimize.svg';

interface Props {
  title: string
}

const Titlebar = ({ title }: Props) => {
  return (
    <div className="reactron-titlebar__container">
      <div className="reactron-titlebar__title-wrapper">{ title }</div>
      <CloseIcon style={{width: 24, height: 24}}/>
    </div>
  );
}

export default Titlebar;

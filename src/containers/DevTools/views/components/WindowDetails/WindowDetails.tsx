import React from 'react';

import { Window } from '~types/window.types';

import { ReactComponent as RefreshIcon } from '../../assets/icons/refresh.svg';
import { ReactComponent as UnmaximizeIcon } from '../../assets/icons/unmaximize.svg';
import { ReactComponent as MaximizeIcon } from '../../assets/icons/maximize.svg';
import { ReactComponent as RestoreIcon } from '../../assets/icons/restore.svg';
import { ReactComponent as MinimizeIcon } from '../../assets/icons/minimize.svg';
import { ReactComponent as FullscreenIcon } from '../../assets/icons/full-screen.svg';
import { ReactComponent as ExitFullscreenIcon } from '../../assets/icons/full-screen-exit.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

interface Props {
  id: string,
  alias: Window.Alias,
  containerType: Window.ContainerType,
  bounds: Window.Bounds,
  flags: Window.Flags
}


const WindowDetails = ({ id, alias, containerType, bounds, flags }: Props) => {
  return (
    <section>
      <h1>{ containerType }</h1>

      <div className="notification info">
        <p><strong>UID:</strong> { id }</p>
      </div><br />

      <div className="container flex wrap no-margin">
        <button className="btn-icon-text" style={{width: 150}}>
          <span><RefreshIcon className="icon"/></span>
          <span>Refresh</span>
        </button>

        <button className="btn-icon-text" style={{width: 150}}>
          <span>{ (flags.isMinimized) ? <RestoreIcon className="icon"/> : <MinimizeIcon className="icon"/> }</span>
          <span>{ (flags.isMinimized) ? "Restore" : "Minimize" }</span>
        </button>

        <button className="btn-icon-text" style={{width: 150}}>
          <span>{ (flags.isMaximized) ? <UnmaximizeIcon className="icon"/> : <MaximizeIcon className="icon"/> }</span>
          <span>{ (flags.isMaximized) ? "Unmaximize" : "Maximize" }</span>
        </button>

        <button className="btn-icon-text" style={{width: 150}}>
          <span>{ (flags.isFullScreen) ? <ExitFullscreenIcon className="icon"/> : <FullscreenIcon className="icon"/> }</span>
          <span>{ (flags.isFullScreen) ? "Exit Fullscreen" : "Fullscreen" }</span>
        </button>

        <button className="btn-icon-text" style={{width: 150}}>
          <span><CloseIcon className="icon"/></span>
          <span>Close</span>
        </button>
      </div><br />

      <ul className="list">
        {
          Object.entries(bounds).map(([key, value]) => {
            return (
              <li key={key} style={{fontSize: 10}}>
                <strong>{ key }:</strong> { value }px
              </li>
            )
          })
        }
      </ul><br />

      <ul className="list">
        {
          Object.entries(flags).map(([key, value]) => {
            return (
              <li key={key} style={{fontSize: 10}}>
                <strong>{ key }:</strong> { value.toString() }
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default WindowDetails;

import React, { useState } from 'react';

import Reactron from 'reactron';

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
  const [showControls, setShowControls] = useState(true);
  const [showBounds, setShowBounds] = useState(false);
  const [showFlags, setShowFlags] = useState(false);

  const handleClose = () => {
      Reactron.clients.windowClient.close({ target: { id }});
  }

  return (
    <section>
      <h1>{ containerType }</h1>

      <div className="notification info">
        <p><strong>UID:</strong> { id }</p>
      </div>

      {
        (flags.isFocused) &&
        <>
          <div className="notification success" style={{marginTop: 5}}>
            This window is currently focused.
          </div>
        </>
      }


      <div
        className={`accordion header ${(showControls) ? " open" : " closed"}`}
        onClick={() => setShowControls(!showControls)}
      >
        { (showControls) ? <RestoreIcon width={12} height={12} style={{float: 'right', margin: 7}}/> : <MinimizeIcon width={12} height={12} style={{float: 'right', margin: 7}}/> }
        <h5>Controls</h5>
      </div>
      {
        showControls &&
          <div className="container flex wrap no-margin">
            <button
              className="btn-icon-text"
              style={{width: 150}}
              onClick={() => Reactron.clients.windowClient.reload({ target: { id }})}
            >
              <span><RefreshIcon className="icon"/></span>
              <span>Reload</span>
            </button>

            <button
              className="btn-icon-text"
              style={{width: 150}}
              onClick={
                (flags.isMinimized)
                  ? () => Reactron.clients.windowClient.restore({ target: { id }})
                  : () => Reactron.clients.windowClient.minimize({ target: { id }})
              }
            >
              <span>{ (flags.isMinimized) ? <RestoreIcon className="icon"/> : <MinimizeIcon className="icon"/> }</span>
              <span>{ (flags.isMinimized) ? "Restore" : "Minimize" }</span>
            </button>

            <button
              className="btn-icon-text"
              style={{width: 150}}
              onClick={
                (flags.isMaximized)
                  ? () => Reactron.clients.windowClient.unmaximize({ target: { id }})
                  : () => Reactron.clients.windowClient.maximize({ target: { id }})
              }
            >
              <span>{ (flags.isMaximized) ? <UnmaximizeIcon className="icon"/> : <MaximizeIcon className="icon"/> }</span>
              <span>{ (flags.isMaximized) ? "Unmaximize" : "Maximize" }</span>
            </button>

            <button className="btn-icon-text" style={{width: 150}}>
              <span>{ (flags.isFullScreen) ? <ExitFullscreenIcon className="icon"/> : <FullscreenIcon className="icon"/> }</span>
              <span>{ (flags.isFullScreen) ? "Exit Fullscreen" : "Fullscreen" }</span>
            </button>

            <button
              className="btn-icon-text"
              style={{width: 150}}
              onClick={() => Reactron.clients.windowClient.close({ target: { id }})}
            >
              <span><CloseIcon className="icon"/></span>
              <span>Close</span>
            </button>
          </div>
      }


      <div
        className={`accordion header ${(showBounds) ? " open" : " closed"}`}
        onClick={() => setShowBounds(!showBounds)}
      >
        { (showBounds) ? <RestoreIcon width={12} height={12} style={{float: 'right', margin: 7}}/> : <MinimizeIcon width={12} height={12} style={{float: 'right', margin: 7}}/> }
        <h5>Bounds</h5>
      </div>
      {
        showBounds &&
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
          </ul>
      }


      <div
        className={`accordion header ${(showFlags) ? " open" : " closed"}`}
        onClick={() => setShowFlags(!showFlags)}
      >
        { (showFlags) ? <RestoreIcon width={12} height={12} style={{float: 'right', margin: 7}}/> : <MinimizeIcon width={12} height={12} style={{float: 'right', margin: 7}}/> }
        <h5>Flags</h5>
      </div>
      {
        showFlags &&
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
      }
    </section>
  )
}

export default WindowDetails;

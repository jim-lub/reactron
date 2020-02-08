import React from 'react';
import { storeClient, windowClient } from '@clients/index';

import windows from 'windows';
import * as styles from './window-tools.module.scss'

import { ReactComponent as CloseIcon } from 'windows/devTools/assets/icons/window/close.svg';
import { ReactComponent as MaximizeIcon } from 'windows/devTools/assets/icons/window/maximize.svg';
import { ReactComponent as UnMaximizeIcon } from 'windows/devTools/assets/icons/window/unmaximize.svg';
import { ReactComponent as MinimizeIcon } from 'windows/devTools/assets/icons/window/minimize.svg';
import { ReactComponent as LinkIcon } from 'windows/devTools/assets/icons/window/link.svg';
import { ReactComponent as PingIcon } from 'windows/devTools/assets/icons/window/ping.svg';
import { ReactComponent as NoIcon } from 'windows/devTools/assets/icons/window/no-icon.svg';

const WindowTools = () => {
  const [windowsObj, unsubscribe]: any = storeClient.useStore(`_windows.refs`);
  const windowProps = windowClient.getWindowProperties();

  const renderWindowList = () => Object.entries(windowsObj).map(([id, { alias, type }]: any) => {
    const { displayName } = windows[type];

    return (
      <div key={id} className={styles.listItem}>
        <div className={styles.actionColumn}>
          <ul>
            <li>
              <CloseIcon className={styles.icon}/>
              <span className={styles.text}>Close</span>
            </li>
            <li>
              <MaximizeIcon className={styles.icon}/>
              <span className={styles.text}>Maximize</span>
            </li>
            <li>
              <MinimizeIcon className={styles.icon}/>
              <span className={styles.text}>Minimize</span>
            </li>
            <li className={styles.disabled}>
              <LinkIcon className={styles.icon}/>
              <span className={styles.text}>Link</span>
            </li>
            <li className={styles.disabled}>
              <PingIcon className={styles.icon}/>
              <span className={styles.text}>Ping</span>
            </li>
            <li className={styles.disabled}>
              <NoIcon className={styles.icon}/>
              <span className={styles.text}>Refresh</span>
            </li>
          </ul>
        </div>

        <div className={styles.dataColumn}>
          <div className={styles.displayName}><h4>{ displayName }</h4></div>
          <div className={styles.id}>{ id }</div>
          <div>
            Putting a text <span style={{fontWeight: 'bold'}}>here</span> just to <span style={{fontStyle: 'italic'}}>test</span> things out.
          </div>
        </div>

        <div className={styles.notificationsColumn}>

        </div>
      </div>
    )
  });

  return (
    <div className={styles.listContainer}>
      { renderWindowList() }
    </div>
  )
}

export default WindowTools;

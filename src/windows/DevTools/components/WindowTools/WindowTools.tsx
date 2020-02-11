import React, { useState } from 'react';
import { storeClient, windowClient } from '@clients/index';

import * as styles from './window-tools.module.scss'

import { List } from './List';

const WindowTools = () => {
  const [windowObj]: any = storeClient.useStore(`_windows.refs`);
  const windowProps = windowClient.getWindowProperties();

  return (
    <div className={styles.wrapper}>
      <div className={styles.launcherContainer}>

      </div>

      <div className={styles.listContainer}>
        <List windowObj={windowObj}/>
      </div>
    </div>
  )
}

export default WindowTools;

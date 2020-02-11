import React from 'react';

import * as styles from '../list.module.scss';

import { ReactComponent as CloseIcon } from 'windows/devTools/assets/icons/window/close.svg';
import { ReactComponent as MaximizeIcon } from 'windows/devTools/assets/icons/window/maximize.svg';
// import { ReactComponent as UnMaximizeIcon } from 'windows/devTools/assets/icons/window/unmaximize.svg';
import { ReactComponent as MinimizeIcon } from 'windows/devTools/assets/icons/window/minimize.svg';
import { ReactComponent as LinkIcon } from 'windows/devTools/assets/icons/window/link.svg';
import { ReactComponent as PingIcon } from 'windows/devTools/assets/icons/window/ping.svg';
// import { ReactComponent as NoIcon } from 'windows/devTools/assets/icons/window/no-icon.svg';

const actions = [
  {
    name: 'Minimize',
    Icon: MinimizeIcon,
    action: () => null
  },
  {
    name: 'Maximize',
    Icon: MaximizeIcon,
    action: () => null
  },
  {
    name: 'Close',
    Icon: CloseIcon,
    action: () => null
  },
  {
    name: 'Focus',
    Icon: PingIcon,
    action: () => null
  },
  {
    name: 'Link',
    Icon: LinkIcon,
    action: () => null
  }
];

const ActionsExtension = () => {
  return (
    <ul className={styles.actionsExtensionContainer}>
      {
        actions.map(({ name, Icon, action }) => {
          return (
            <li>
              <div className={styles.iconWrapper}>
                <Icon className={styles.icon}/>
              </div>

              <div className={styles.nameWrapper}>
                { name }
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ActionsExtension;

import React from 'react';

import * as styles from '../list.module.scss';

interface Props {
  tabs: {
    [name: string]: boolean,
  },
  onClick: (name: string) => void
}

const Tabs = ({ tabs, onClick }: Props) => {
  return (
    <ul className={styles.tabsContainer}>
      {
        Object.entries(tabs).map(([name, isOpen]) => {
          return (
            <li
              key={name}
              className={(isOpen) ? styles.isOpen : ''}
              onClick={() => onClick(name)}
            >
              { name }
            </li>
          )
        })
      }
      <li className={styles.filler} />
    </ul>
  )
}

export default Tabs;

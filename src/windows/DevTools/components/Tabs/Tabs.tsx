import React from 'react';

import * as styles from './tabs.module.scss';

interface Props {
  tabs: string[],
  currentTabIndex: number,
  onSwitch: (tabIndex: number) => void
}

const Tabs = ({ tabs, currentTabIndex, onSwitch }: Props) => {
  return (
    <>
      <div className={styles.container}>
        {
          tabs.map((name, index) => {
            return (
              <div
                key={name}
                className={(index === currentTabIndex) ? styles.tabActive : styles.tab }
                onClick={() => onSwitch(index)}
              >
                { name }
              </div>
            )
          })
        }
        <div className={styles.tabFiller}></div>
      </div>
    </>
  )
}

export default Tabs;

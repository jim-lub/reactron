import React, { useState } from 'react';

import ActionsExtension from './ActionsExtension';
import ListenersExtension from './ListenersExtension';
import Tabs from './Tabs';

import * as styles from '../list.module.scss';
import windows from 'windows';

interface Props {
  id: string,
  type: string
}

const extensions = [
  {
    name: 'Actions',
    Component: ActionsExtension,
    startOpen: true
  },
  {
    name: 'Listeners',
    Component: ListenersExtension,
    startOpen: false
  }
]

const ListItem = ({ id, type }: Props) => {
  const [isOpen, setIsOpen] = useState<{ [name: string]: boolean }>({
    ...extensions.reduce((obj, { name, startOpen }) => obj = { ...obj, [name]: startOpen }, {})
  });

  const { displayName } = windows[type];

  const handleTabsClick = (name: string): void => {
    setIsOpen({
      ...isOpen,
      [name]: !isOpen[name]
    })
  }

  return (
    <div className={styles.itemContainer}>
      <div className={styles.header}>
        { displayName }
      </div>

      <Tabs tabs={isOpen} onClick={handleTabsClick}/>

      {
        extensions.map(({ name, Component }) => {
          return isOpen[name] && <Component key={name}/>
        })
      }
    </div>
  )
}

export default ListItem;

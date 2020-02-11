import React, { useState } from 'react';

import { ListItem } from './ListItem';
import * as styles from './list.module.scss';

interface ListProps {
  windowObj: {
    [id: string]: {
      type: string
    }
  }
}

const List = ({ windowObj }: ListProps) => {
  return (
    <ul className={styles.wrapper}>
      {
        Object.entries(windowObj).map(([id, { type }]) => {
          return (
            <li key={id}>
              <ListItem id={id} type={type}/>
            </li>
          )
        })
      }
    </ul>
  )
}

export default List;

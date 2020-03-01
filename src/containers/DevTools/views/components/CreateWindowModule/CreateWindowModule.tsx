import React from 'react';

import styles from './create-window-module.module.scss';

const CreateWindowModule = () => {
  return (
    <div className={styles.wrapper}>
      <select className={styles.select}>
        <option value="one">DevTools</option>
        <option value="two">Example</option>
      </select>
      <input className={styles.input} value={640} />
      <input className={styles.input} value={480} />
      <button className={styles.button}>Open</button>
    </div>
  )
}

export default CreateWindowModule;

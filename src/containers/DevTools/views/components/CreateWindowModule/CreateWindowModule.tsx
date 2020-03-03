import React, { useState } from 'react';
import Reactron from 'reactron';

import Containers, { ContainerTypes } from 'containers';

import styles from './create-window-module.module.scss';

const CreateWindowModule = () => {
  const [selection, setSelection] = useState( Object.values(ContainerTypes)[0] );
  const [windowWidth, setWindowWidth] = useState('640');
  const [windowHeight, setWindowHeight] = useState('480');

  const { windowClient } = Reactron.clients;

  const handleSubmit = () => {
    windowClient.open({
      payload: {
        containerType: selection,
        width: Number(windowWidth),
        height: Number(windowHeight)
      }
    });
  }

  const renderSelectOptions = () => Object.values(ContainerTypes).map(containerType => {
    return (
      <option
        key={containerType}
        value={containerType}
      >
        { Containers[containerType].displayName }
      </option>
    )
  });

  return (
    <div className={styles.wrapper}>
      <select
        className={styles.select}
        onChange={(e) => setSelection(e.target.value)}
        value={selection}
      >
        {
          renderSelectOptions()
        }
      </select>

      <input
        className={styles.input}
        value={windowWidth}
        onChange={(e) => setWindowWidth(e.target.value)}
      />

      <input
        className={styles.input}
        value={windowHeight}
        onChange={(e) => setWindowHeight(e.target.value)}
      />

      <button
        className={styles.button}
        onClick={handleSubmit}
      >
        Open
      </button>
    </div>
  )
}

export default CreateWindowModule;

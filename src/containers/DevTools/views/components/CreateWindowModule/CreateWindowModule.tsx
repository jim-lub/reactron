import React, { useState } from 'react';
import Reactron from 'reactron';

import Containers, { ContainerTypes } from 'containers';

import { ReactComponent as AddIcon } from '../../assets/icons/unmaximize.svg';

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
    <>
      <section>
      </section>

      <section className="alt flex">
        <select
          onChange={(e) => setSelection(e.target.value)}
          value={selection}
        >
          {
            renderSelectOptions()
          }
        </select>

        <input
          className="input"
          style={{ maxWidth: 70, textAlign: 'center' }}
          value={windowWidth}
          onChange={(e) => setWindowWidth(e.target.value)}
        />

        <input
          className="input"
          style={{ maxWidth: 70, textAlign: 'center' }}
          value={windowHeight}
          onChange={(e) => setWindowHeight(e.target.value)}
        />

        <div className="divider vertical"></div>

        <button
          type="button"
          className="btn-icon-text"
          style={{ maxWidth: 150 }}
          onClick={handleSubmit}
        >
          <span className="icon-wrap"><AddIcon className="icon" /></span>
          <span className="text-wrap">Create</span>
        </button>
      </section>
    </>
  )
}

export default CreateWindowModule;

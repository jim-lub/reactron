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
    <section className="section">
      <div className="box">
        <div className="level-left">
          <div className="select">
            <select
              onChange={(e) => setSelection(e.target.value)}
              value={selection}
            >
              {
                renderSelectOptions()
              }
            </select>
          </div>

          <p className="control">
            <input
              className="input"
              value={windowWidth}
              onChange={(e) => setWindowWidth(e.target.value)}
            />
          </p>

          <p className="control">
            <input
              className="input"
              value={windowHeight}
              onChange={(e) => setWindowHeight(e.target.value)}
            />
          </p>
        </div>

        <div className="level-right">
          <button
            type="button"
            className="blue"
            onClick={handleSubmit}
          >
            Create
          </button>
          <button
            type="button"
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </section>
  )
}

export default CreateWindowModule;

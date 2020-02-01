import React, { useEffect } from 'react';
import loadContent from 'internals/renderer/lib/loadContent';
import './reactron-window.scss';

const ReactronWindow = () => {
  useEffect(() => {
    loadContent();
  }, []);

  return (
    <div className="reactron-window__container">
      <div className="reactron-window__titlebar-container">
        Reactron
      </div>
      <div className="reactron-window__content-container">
        <div id="app-root"></div>
      </div>
    </div>
  )
}

export default ReactronWindow;

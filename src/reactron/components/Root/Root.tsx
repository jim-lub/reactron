import React, { useEffect } from 'react';

import loadContent from '@reactron/renderer/lib/loadContent';
import getUrlParams from '@reactron/renderer/lib/getUrlParams';

import { DefaultWindow } from '@reactron/components';

const Root = () => {
  const { uid, alias } = getUrlParams(window.location.href);

  useEffect(() => {
    loadContent({ uid, alias });
  }, []); // runs after initial render

  return (
    <DefaultWindow uid={uid} alias={alias}>
      <div id="app-root">
        {/*
          After completing the initial render, the Root renderer will inject the
          app's content in this container by utilizing ReactDOM.render().
        */}
      </div>
    </DefaultWindow>
  );
}

export default Root;
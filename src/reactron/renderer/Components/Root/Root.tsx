import React, { useEffect } from 'react';

import loadContent from 'renderer/lib/loadContent';

import { DefaultWindow} from 'renderer/Components';

const Root = () => {
  useEffect(() => loadContent(), []); // runs after initial render

  return (
    <DefaultWindow>
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

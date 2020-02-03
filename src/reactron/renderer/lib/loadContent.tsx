import React from 'react';
import ReactDOM from 'react-dom';

import { DevTools, Launcher } from 'app';

const loadContent = ({ uid, alias }: { uid: string, alias: string }) => {
  switch (alias) {
    case 'devtools': return ReactDOM.render(<DevTools uid={uid} />, document.getElementById('app-root'));
    case 'launcher': return ReactDOM.render(<Launcher uid={uid} />, document.getElementById('app-root'));
  }
}

export default loadContent;

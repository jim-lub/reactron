import React from 'react';
import ReactDOM from 'react-dom';

import { Launcher } from 'app';

const loadContent = () => {
  ReactDOM.render(<Launcher />, document.getElementById('app-root'));
}

export default loadContent;

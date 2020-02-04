import * as clc from 'cli-color';
import * as isDev from 'electron-is-dev';
import {
  formatOriginPath,
  logSingleLineOutput,
  logTypes
} from '../cli-logger';

const store = (actionType: string, payload: {}) => {
  if (!isDev) return;

  /*** OUTPUT ***/
  logSingleLineOutput(
    logTypes.store,
    `${ clc.magenta(actionType) } : ${ clc.yellow(payload) }`
  );
}

export default store;

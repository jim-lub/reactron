import * as clc from 'cli-color';
import * as isDev from 'electron-is-dev';
import {
  formatOriginPath,
  logDataTableLine,
  logDataTableOutput,
  logSingleLineOutput,
  logTypes
} from '../cli-logger';

const store = (actionType: string, payload: {}) => {
  if (!isDev) return;

  const header = [clc.yellow('KEY'), clc.yellow('VALUE')];
  const rows = Object.entries(payload).map(([key, value]) => {
    const out_key = clc.blackBright(key);
    const out_value = (value)
      ? clc.cyan(value)
      : clc.red('-');

    return [out_key, out_value]
  });

  /*** OUTPUT ***/
  logDataTableLine(74);
  logSingleLineOutput(
    logTypes.store,
    `${clc.bgYellow.black(` dispatch `)} ${clc.bgYellow.black(` action `)} ${clc.bgCyan.black(` ${actionType} `)}`
  );

  logDataTableLine(74);
  logDataTableOutput(
    header,
    rows
  );
  logDataTableLine(74);
}

export default store;

import * as clc from 'cli-color';
import * as isDev from 'electron-is-dev';
import {
  // formatOriginPath,
  // logDataTableLine,
  // logDataTableOutput,
  logSingleLineOutput,
  logTypes
} from '../cli-logger';

const store = (source: { id: string }, actionType: string, payload: {}) => {
  if (!isDev) return;

  // const header = [clc.yellow('KEY'), clc.yellow('VALUE')];
  // const rows = Object.entries(payload).map(([key, value]) => {
  //   const out_key = clc.blackBright(key);
  //   const out_value = (value)
  //     ? clc.cyan(value)
  //     : clc.red('-');
  //
  //   return [out_key, out_value]
  // });

  /*** OUTPUT ***/
  // logDataTableLine(75);
  logSingleLineOutput(
    logTypes.store,
    `${clc.bgBlackBright(` DISPATCH `)} ${clc.cyan(`${actionType}`)} ${clc.blackBright(`?source=${source.id}`)}`
  );

  // logDataTableLine(75);
  // logDataTableOutput(
  //   header,
  //   rows
  // );
  // logDataTableLine(75);
}

export default store;

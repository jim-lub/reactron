import * as clc from 'cli-color';

import {
  logDataTableLineAlt,
  logEmptyLine
} from '../cli-logger';

const welcomeToReactron = () => {

logDataTableLineAlt(75);
console.log(`              |                                                                         |
              |     ${clc.cyan(`Reactron is running in ${clc.yellow('development')} mode with logging ${clc.green('enabled')}.`)}       |
              |                                                                         |
              |                                                                         |`);
logDataTableLineAlt(75);
logEmptyLine();

}

export default welcomeToReactron;

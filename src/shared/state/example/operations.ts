import Reactron from 'reactron';

import * as actions from './actions';
import * as utils from './utils';

interface Props {
  number?: number,
  string?: string,
  object?: {},
  array?: Array<any>
}

export const doSomething = ({ number, string, object, array }: Props) => {
  const { dispatch } = Reactron.clients.storeClient;

  if (number) {
    dispatch( actions.setExampleNumber({ number }) );
  }

  if (string) {
    dispatch( actions.setExampleString({ string }) );
  }

  if (object) {
    dispatch( actions.setExampleObject({ object }) );
  }

  if (array) {
    dispatch( actions.setExampleArray({ array }) );
  }
}

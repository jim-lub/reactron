import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { storeClient, /* windowClient */ } from '@clients/index';

const useStore = (pathToProperty?: string) => {
  /*
  * Generates an unique channel id for this listener instance
  */
  const [listenerChannel] = useState(`@store:listen:${ uuid() }`);
  const [value, setValue]: any = useState({});

  const compare = (_event: any, result: any) => {
    if (result != value) {
      setValue(result);
    }
  }

  const unsubscribe = () => storeClient.unsubscribe(listenerChannel);

  useEffect(() => storeClient.subscribe(listenerChannel, pathToProperty), []);
  useEffect(() => storeClient.listen(listenerChannel, compare), [value]);

  return [value, unsubscribe];
}

export default useStore;

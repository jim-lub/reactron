import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { storeClient, windowClient } from '@clients/index';

const useStore = (pathToProperty?: string) => {
  /*
  * Generates an unique channel id for this listener instance
  */
  const [returnChannel] = useState(`store:listen:${ uuid() }`);
  const [value, setValue]: any = useState({});

  const compare = (_event: any, result: any) => {
    if (result != value) {
      setValue(result);
    }
  }

  useEffect(() => storeClient.subscribe(returnChannel, pathToProperty), []);
  useEffect(() => storeClient.listen(returnChannel, compare), [value]);

  return [value];
}

export default useStore;

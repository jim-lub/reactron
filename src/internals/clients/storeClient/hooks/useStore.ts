import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import * as storeClient from '../';

const useStore = <T>(pathToProperty?: string, initialValue?: any) => {
  // Generates an unique channel id for this listener instance
  const [listenerChannel] = useState(`@store:listen:${ uuid() }`);
  const [value, setValue]: [T, any] = useState(initialValue);

  const callback = (_event: any, result: any) => {
    if (result != value) {
      setValue(result);
    }
  }

  const unsubscribe = () => storeClient.unsubscribe(listenerChannel);

  useEffect(() => storeClient.subscribe(listenerChannel, pathToProperty), []);
  useEffect(() => storeClient.listen(listenerChannel, callback), [value]);

  return [value, unsubscribe];
}

export default useStore;

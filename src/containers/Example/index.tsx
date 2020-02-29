import React, { useEffect } from 'react';

import { storeClient, windowClient } from '@clients';

const Example = () => {
  const [value] = storeClient.useStore('');
  const { id } = windowClient.getWindowProperties();

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <div>
      <h1>Example Container</h1>
      <h5>{ id }</h5>
    </div>
  )
}

export default Example;

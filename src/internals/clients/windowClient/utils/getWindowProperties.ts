import { getUrlParams } from '@renderer/lib/utils';

const getWindowProperties = () => {
  const { id, containerType } = getUrlParams();

  // subscribe to other window properties

  return {
    id,
    containerType
  }
}

export default getWindowProperties;

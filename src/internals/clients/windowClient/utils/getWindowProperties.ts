import { getUrlParams } from '@renderer/lib/utils';

const getWindowProperties = () => {
  const { id, containerType } = getUrlParams();

  return {
    id,
    containerType
  }
}

export default getWindowProperties;

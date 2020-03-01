import { getUrlParams } from '@renderer/lib/utils';

const getStaticWindowProperties = () => {
  const { id, containerType } = getUrlParams();

  return {
    id,
    containerType
  }
}

export default getStaticWindowProperties;

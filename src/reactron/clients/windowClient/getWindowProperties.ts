import getUrlParams from '@renderer/lib/utils/getUrlParams';

const getWindowProperties = () => {
  const url = window.location.href;
  const { id, type } = getUrlParams(url);

  return {
    id,
    type
  };
}

export default getWindowProperties;

import getUrlParams from './getUrlParams';

const getCurrentWindowId = () => {
  const url = window.location.href;
  const { id } = getUrlParams(url);

  return id;
}

export default getCurrentWindowId;

const getUrlParams = () => {
  const href = window.location.href;

  const obj: { [key: string]: string} = {};

  href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    (str: any, key: string, value: string) => {
      obj[key] = value
      return str;
    }
  );

  return {
    ...obj
  }
}

export default getUrlParams;

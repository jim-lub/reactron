import { storeClient } from '@clients';
import { getUrlParams } from '@renderer/lib/utils';

const getDynamicWindowProperties = async () => new Promise((resolve) => {
  const { id } = getUrlParams();

  storeClient.get(`__.windows.refs.${id}`).then((props) => {
    resolve({
      id,
      props
    });
  });
});

export default getDynamicWindowProperties;

import { getState } from '@main/store';

import * as selectors from '../selectors';

interface Props {
  source: {
    id: string
  },
  target: {
    id: string
  }
}

const maximizeWindow = ({ target: { id } }: Props) => {
  const windowRef = selectors.getWindowRef(getState(), { id });

  if (windowRef) {
    windowRef.maximize();
  }
}

export default maximizeWindow;

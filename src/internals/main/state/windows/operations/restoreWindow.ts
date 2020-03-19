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

const restoreWindow = ({ target: { id } }: Props) => {
  const windowRef = selectors.getWindowRef(getState(), { id });

  if (windowRef) {
    windowRef.restore();
  }
}

export default restoreWindow;

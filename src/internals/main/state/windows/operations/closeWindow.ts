import { dispatch, getState } from '@main/store';

import * as actions from '../actions';
import * as selectors from '../selectors';

interface Props {
  source: {
    id: string
  },
  target: {
    id: string
  }
}

const closeWindow = ({ target: { id } }: Props) => {
  const windowRef = selectors.getWindowRef(getState(), { id });

  if (windowRef) {
    windowRef.close();

    dispatch( actions.removeWindowInstance({ id }) );
  }
}

export default closeWindow;

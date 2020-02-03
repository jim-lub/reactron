import { dispatch, getState, reducers } from '@reactron/main/lib/store';

interface Props {
  uid: string
}

const closeWindow = ({ uid }: Props) => {
  const windowRef = getState().windows[uid];

  if (windowRef) {
    windowRef.ref.close();

    dispatch(reducers.removeWindowRef, { uid });
  }
}

export default closeWindow;

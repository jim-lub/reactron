import { getState } from '@reactron/main/lib/store';

interface Props {
  uid: string
}

const maximizeWindow = ({ uid }: Props) => {
  const windowRef = getState().windows[uid];

  if (windowRef) {
    windowRef.ref.isMaximized() ? windowRef.ref.unmaximize() : windowRef.ref.maximize();
  }
}

export default maximizeWindow;

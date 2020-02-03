import { getState } from '@reactron/main/lib/store';

interface Props {
  uid: string
}

const minimizeWindow = ({ uid }: Props) => {
  const windowRef = getState().windows[uid];

  if (windowRef) {
    windowRef.ref.isMinimized() ? windowRef.ref.restore() : windowRef.ref.minimize();
  }
}

export default minimizeWindow;

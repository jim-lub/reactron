import actionTypes from '../actionTypes';

interface Props {
    id: string,
    type: string,
    alias: string,
    ref: Electron.BrowserWindow
}

const addWindowRef = ({ id, type, alias, ref }: Props) => ({
  type: actionTypes.addWindowRef,
  payload: {
    id,
    type,
    alias,
    ref,
  }
});

export default addWindowRef;

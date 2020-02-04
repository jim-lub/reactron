import actionTypes from '../actionTypes';

interface Props {
    id: string
}

const removeWindowRef = ({ id }: Props) => ({
  type: actionTypes.removeWindowRef,
  payload: {
    id
  }
});

export default removeWindowRef;

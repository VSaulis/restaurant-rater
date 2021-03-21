import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from 'features/profile/actions';

const useChangePassword = () => {
  const dispatch = useDispatch();
  const { isUpdating } = useSelector((state) => state.profile);

  const changePassword = (request) => {
    dispatch(ProfileActions.changePassword(request));
  };

  return { changePassword, isUpdating };
};

export default useChangePassword;

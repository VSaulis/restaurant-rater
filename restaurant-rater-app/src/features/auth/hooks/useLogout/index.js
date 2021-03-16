import { useDispatch } from 'react-redux';
import { AuthActions } from 'features/auth/actions';

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(AuthActions.logout());
  };

  return { logout };
};

export default useLogout;

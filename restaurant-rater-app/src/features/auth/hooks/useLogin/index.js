import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from 'features/auth/actions';

const useLogin = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const login = (request) => {
    dispatch(AuthActions.login(request));
  };

  return { login, isLoading };
};

export default useLogin;

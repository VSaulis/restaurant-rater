import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from 'features/auth/actions';

const useRegistration = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const register = (request) => {
    dispatch(AuthActions.register(request));
  };

  return { register, isLoading };
};

export default useRegistration;

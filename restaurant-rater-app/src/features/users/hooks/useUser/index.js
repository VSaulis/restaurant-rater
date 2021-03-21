import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserActions } from 'features/users/actions';

const useUser = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const { user, isLoading, isRefreshing } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(UserActions.getUser(id));
  }, [dispatch, id]);

  const refresh = () => {
    dispatch(UserActions.refreshUser(id));
  };

  return { user, isLoading, isRefreshing, refresh };
};

export default useUser;

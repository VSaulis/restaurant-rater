import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { UserActions } from 'features/users/actions';
import useUser from 'features/users/hooks/useUser';

const useUserEdit = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const { isUpdating } = useSelector((state) => state.user);
  const { user, refresh, isRefreshing, isLoading } = useUser({ id });

  const editUser = (request) => {
    dispatch(UserActions.editUser(id, request));
  };

  return { isUpdating, editUser, user, refresh, isRefreshing, isLoading };
};

export default useUserEdit;

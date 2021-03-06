import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { UserActions } from 'features/users/actions';

const useUserDelete = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const { user, isLoading, isDeleting } = useSelector((state) => state.user);

  const deleteUser = () => {
    dispatch(UserActions.deleteUser(id));
  };

  return { user, isLoading, isDeleting, deleteUser };
};

export default useUserDelete;

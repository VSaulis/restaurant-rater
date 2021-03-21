import { useDispatch, useSelector } from 'react-redux';
import { UsersActions } from 'features/users/actions';
import { useInfinityLoadingList } from 'shared/hooks';

const useUsers = () => {
  const { users, isLoading, isRefreshing, count } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const refreshAction = (request) => {
    dispatch(UsersActions.refreshUsers(request));
  };

  const loadMoreAction = (request) => {
    dispatch(UsersActions.getUsers(request));
  };

  const { loadMore, refresh } = useInfinityLoadingList({
    isLoading,
    isRefreshing,
    count,
    refreshAction,
    loadMoreAction,
  });

  return { users, isLoading, isRefreshing, loadMore, refresh, count };
};

export default useUsers;

import { useDispatch, useSelector } from 'react-redux';
import { useRole } from 'features/auth/hooks';
import { SortUtils } from 'features/restaurants/utils';
import useRestaurantsFilter from '../useRestaurantsFilter';
import { useInfinityLoadingList } from 'shared/hooks';
import { RestaurantsActions } from 'features/restaurants/actions';

const useRestaurants = () => {
  const { restaurants, isLoading, isRefreshing, count } = useSelector(
    (state) => state.restaurants
  );
  const { filter } = useRestaurantsFilter();
  const { isRegularUser } = useRole();
  const dispatch = useDispatch();

  const refreshAction = (request) => {
    dispatch(RestaurantsActions.refreshRestaurants(request));
  };

  const loadMoreAction = (request) => {
    dispatch(RestaurantsActions.getRestaurants(request));
  };

  const { loadMore, refresh } = useInfinityLoadingList({
    sort: SortUtils.getSortByRole(isRegularUser),
    filter,
    isLoading,
    isRefreshing,
    count,
    refreshAction,
    loadMoreAction,
  });

  return { restaurants, isLoading, isRefreshing, loadMore, refresh, count };
};

export default useRestaurants;

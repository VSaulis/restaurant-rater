import { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { useDispatch, useSelector } from 'react-redux';
import { RestaurantsActions } from 'features/restaurants/actions';

const initialPaging = { limit: 20, offset: 0 };

const useQuizzes = (props) => {
  const { filter, sort } = props;
  const { restaurants, isLoading, isRefreshing, count } = useSelector((state) => state.restaurants);

  const [paging, setPaging] = useState(initialPaging);
  const dispatch = useDispatch();
  const canLoadMore = count > paging.offset;

  useDeepCompareEffect(() => {
    const request = { filter, sort, paging };

    if (paging.offset === 0) {
      dispatch(RestaurantsActions.refreshRestaurants(request));
    }

    if (paging.offset > 0 && canLoadMore) {
      dispatch(RestaurantsActions.getRestaurants(request));
    }
  }, [dispatch, filter, sort, paging]);

  const loadMore = () => {
    if (canLoadMore && !isLoading && !isRefreshing) {
      setPaging({ ...paging, offset: paging.offset + paging.limit });
    }
  };

  const refresh = () => {
    setPaging({ ...paging, offset: 0 });
  };

  return { restaurants, isLoading, isRefreshing, loadMore, refresh };
};

export default useQuizzes;

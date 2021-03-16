import { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { useDispatch, useSelector } from 'react-redux';
import { ReviewsActions } from 'features/reviews/actions';

const initialPaging = { limit: 20, offset: 0 };

const useReviews = (props) => {
  const { filter, sort } = props;
  const { reviews, isLoading, isRefreshing, count } = useSelector((state) => state.reviews);

  const [paging, setPaging] = useState(initialPaging);
  const dispatch = useDispatch();
  const canLoadMore = count > paging.offset;

  useDeepCompareEffect(() => {
    const request = { filter, sort, paging };

    if (paging.offset === 0) {
      dispatch(ReviewsActions.refreshReviews(request));
    }

    if (paging.offset > 0 && canLoadMore) {
      dispatch(ReviewsActions.getReviews(request));
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

  return { reviews, isLoading, isRefreshing, loadMore, refresh };
};

export default useReviews;

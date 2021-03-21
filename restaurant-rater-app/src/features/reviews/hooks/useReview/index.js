import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ReviewActions } from 'features/reviews/actions';

const useReview = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const { review, isLoading, isRefreshing } = useSelector((state) => state.review);

  useEffect(() => {
    dispatch(ReviewActions.getReview(id));
  }, [dispatch, id]);

  const refresh = () => {
    dispatch(ReviewActions.refreshReview(id));
  };

  return { review, isLoading, isRefreshing, refresh };
};

export default useReview;

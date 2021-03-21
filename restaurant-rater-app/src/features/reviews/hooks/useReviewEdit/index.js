import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ReviewActions } from 'features/reviews/actions';
import useReview from 'features/reviews/hooks/useReview';

const useReviewEdit = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const { isUpdating } = useSelector((state) => state.review);
  const { review, isLoading } = useReview({ id });

  const editReview = (request) => {
    dispatch(ReviewActions.editReview(id, request));
  };

  return { isUpdating, editReview, review, isLoading };
};

export default useReviewEdit;

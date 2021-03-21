import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ReviewActions } from 'features/reviews/actions';

const useReviewAdd = (props) => {
  const { restaurantId } = props;
  const dispatch = useDispatch();
  const { isAdding } = useSelector((state) => state.review);

  const addReview = (request) => {
    dispatch(ReviewActions.addReview({ ...request, restaurantId }));
  };

  return { isAdding, addReview };
};

export default useReviewAdd;

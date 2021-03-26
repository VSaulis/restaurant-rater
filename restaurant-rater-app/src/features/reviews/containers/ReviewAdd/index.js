import React from 'react';
import { ReviewForm } from 'features/reviews/components';
import { useReviewAdd } from 'features/reviews/hooks';
import PropTypes from 'prop-types';

const ReviewAdd = (props) => {
  const { restaurantId } = props;
  const { addReview, isAdding } = useReviewAdd({ restaurantId });
  return <ReviewForm isLoading={isAdding} onSubmit={addReview} />;
};

ReviewAdd.propTypes = {
  restaurantId: PropTypes.number.isRequired,
};

export default ReviewAdd;

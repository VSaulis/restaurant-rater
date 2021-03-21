import React from 'react';
import * as Styles from './styles';
import { ReviewForm } from 'features/reviews/components';
import { useReviewAdd } from 'features/reviews/hooks';
import PropTypes from 'prop-types';

const ReviewAdd = (props) => {
  const { restaurantId } = props;
  const { addReview, isAdding } = useReviewAdd({ restaurantId });

  return (
    <Styles.Container>
      <ReviewForm title="Add review" isLoading={isAdding} onSubmit={addReview} />
    </Styles.Container>
  );
};

ReviewAdd.propTypes = {
  restaurantId: PropTypes.number.isRequired,
};

export default ReviewAdd;

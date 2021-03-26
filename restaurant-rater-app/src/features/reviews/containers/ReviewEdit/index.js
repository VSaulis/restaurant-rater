import React from 'react';
import * as Styles from './styles';
import { ReviewForm } from 'features/reviews/components';
import { useReviewEdit } from 'features/reviews/hooks';
import PropTypes from 'prop-types';

const ReviewEdit = (props) => {
  const { id } = props;
  const { editReview, isUpdating, review, isLoading } = useReviewEdit({ id });

  if (!review || isLoading) {
    return <Styles.Container />;
  }

  return (
    <Styles.Container>
      <ReviewForm
        formData={review}
        title="Edit review"
        isLoading={isUpdating}
        onSubmit={editReview}
      />
    </Styles.Container>
  );
};

ReviewEdit.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ReviewEdit;

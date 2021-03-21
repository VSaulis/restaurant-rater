import React from 'react';
import { ReviewEdit } from 'features/reviews/containers';
import { ScreenContainer } from 'shared/components';

const ReviewEditScreen = (props) => {
  const { route } = props;

  return (
    <ScreenContainer>
      <ReviewEdit id={route.params.id} />
    </ScreenContainer>
  );
};

export default ReviewEditScreen;

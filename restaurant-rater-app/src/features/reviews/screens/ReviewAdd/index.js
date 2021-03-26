import React from 'react';
import { ReviewAdd } from 'features/reviews/containers';
import { PrimaryHeader, ScreenContainer } from 'shared/components';

const ReviewAddScreen = (props) => {
  const { route } = props;

  return (
    <ScreenContainer>
      <PrimaryHeader title="Add review" />
      <ReviewAdd restaurantId={route.params.restaurantId} />
    </ScreenContainer>
  );
};

export default ReviewAddScreen;

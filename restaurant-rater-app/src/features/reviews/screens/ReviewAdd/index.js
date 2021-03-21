import React from 'react';
import { ReviewAdd } from 'features/reviews/containers';
import { ScreenContainer } from 'shared/components';

const ReviewAddScreen = (props) => {
  const { route } = props;

  return (
    <ScreenContainer>
      <ReviewAdd restaurantId={route.params.restaurantId} />
    </ScreenContainer>
  );
};

export default ReviewAddScreen;

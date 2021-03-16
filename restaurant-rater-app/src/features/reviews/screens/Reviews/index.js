import React from 'react';
import { Reviews } from 'features/reviews/containers';
import { ScreenContainer } from 'shared/components';

const ReviewsScreen = () => {
  return (
    <ScreenContainer>
      <Reviews />
    </ScreenContainer>
  );
};

export default ReviewsScreen;

import React from 'react';
import { Restaurant } from 'features/restaurants/containers';
import { ScreenContainer } from 'shared/components';

const RestaurantScreen = () => {
  return (
    <ScreenContainer>
      <Restaurant id={1} />
    </ScreenContainer>
  );
};

export default RestaurantScreen;

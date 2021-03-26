import React from 'react';
import { Restaurants } from 'features/restaurants/containers';
import { ScreenContainer } from 'shared/components';

const RestaurantsScreen = () => {
  return (
    <ScreenContainer>
      <Restaurants />
    </ScreenContainer>
  );
};

export default RestaurantsScreen;

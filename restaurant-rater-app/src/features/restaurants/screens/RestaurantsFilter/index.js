import React from 'react';
import { RestaurantsFilter } from 'features/restaurants/containers';
import { ScreenContainer } from 'shared/components';

const RestaurantsFilterScreen = () => {
  return (
    <ScreenContainer>
      <RestaurantsFilter />
    </ScreenContainer>
  );
};

export default RestaurantsFilterScreen;

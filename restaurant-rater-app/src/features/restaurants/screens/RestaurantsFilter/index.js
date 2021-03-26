import React from 'react';
import { RestaurantsFilter } from 'features/restaurants/containers';
import { PrimaryHeader, ScreenContainer } from 'shared/components';

const RestaurantsFilterScreen = () => {
  return (
    <ScreenContainer>
      <PrimaryHeader title="Filter" />
      <RestaurantsFilter />
    </ScreenContainer>
  );
};

export default RestaurantsFilterScreen;

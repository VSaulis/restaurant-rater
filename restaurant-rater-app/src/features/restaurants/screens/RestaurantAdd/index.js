import React from 'react';
import { RestaurantAdd } from 'features/restaurants/containers';
import { PrimaryHeader, ScreenContainer } from 'shared/components';

const RestaurantAddScreen = () => {
  return (
    <ScreenContainer>
      <PrimaryHeader title="Add restaurant" />
      <RestaurantAdd />
    </ScreenContainer>
  );
};

export default RestaurantAddScreen;

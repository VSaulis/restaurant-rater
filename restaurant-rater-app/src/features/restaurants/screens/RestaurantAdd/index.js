import React from 'react';
import { RestaurantAdd } from 'features/restaurants/containers';
import { ScreenContainer } from 'shared/components';

const RestaurantAddScreen = () => {
  return (
    <ScreenContainer>
      <RestaurantAdd />
    </ScreenContainer>
  );
};

export default RestaurantAddScreen;

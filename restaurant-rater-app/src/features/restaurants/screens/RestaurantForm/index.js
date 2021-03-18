import React from 'react';
import { RestaurantForm } from 'features/restaurants/containers';
import { ScreenContainer } from 'shared/components';

const RestaurantFormScreen = () => {
  return (
    <ScreenContainer>
      <RestaurantForm />
    </ScreenContainer>
  );
};

export default RestaurantFormScreen;

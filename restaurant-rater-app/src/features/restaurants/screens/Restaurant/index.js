import React from 'react';
import { Restaurant } from 'features/restaurants/containers';
import { PrimaryHeader, ScreenContainer } from 'shared/components';

const RestaurantScreen = (props) => {
  const { route } = props;

  return (
    <ScreenContainer>
      <PrimaryHeader title={route.params.title} />
      <Restaurant id={route.params.id} />
    </ScreenContainer>
  );
};

export default RestaurantScreen;

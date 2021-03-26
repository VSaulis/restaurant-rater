import React from 'react';
import { Restaurant } from 'features/restaurants/containers';
import { ScreenContainer } from 'shared/components';

const RestaurantScreen = (props) => {
  const { route } = props;

  return (
    <ScreenContainer>
      <Restaurant id={route.params.id} />
    </ScreenContainer>
  );
};

export default RestaurantScreen;

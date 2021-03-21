import React from 'react';
import { Restaurant } from 'features/restaurants/containers';
import { FullScreenContainer } from 'shared/components';

const RestaurantScreen = (props) => {
  const { route } = props;

  return (
    <FullScreenContainer>
      <Restaurant id={route.params.id} />
    </FullScreenContainer>
  );
};

export default RestaurantScreen;

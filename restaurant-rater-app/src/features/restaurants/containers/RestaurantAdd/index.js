import React from 'react';
import * as Styles from './styles';
import { Spacings, Typography } from 'shared/styles';
import { useRestaurantAdd } from 'features/restaurants/hooks';
import { RestaurantForm } from 'features/restaurants/components';

const RestaurantAdd = () => {
  const { addRestaurant, isAdding } = useRestaurantAdd();

  return (
    <Styles.Container>
      <Typography.Heading style={Spacings.BOTTOM_SPACING.L}>
        Add restaurant
      </Typography.Heading>
      <RestaurantForm isLoading={isAdding} onSubmit={addRestaurant} />
    </Styles.Container>
  );
};

export default RestaurantAdd;

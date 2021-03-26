import React from 'react';
import { useRestaurantAdd } from 'features/restaurants/hooks';
import { RestaurantForm } from 'features/restaurants/components';

const RestaurantAdd = () => {
  const { addRestaurant, isAdding } = useRestaurantAdd();
  return <RestaurantForm isLoading={isAdding} onSubmit={addRestaurant} />;
};

export default RestaurantAdd;

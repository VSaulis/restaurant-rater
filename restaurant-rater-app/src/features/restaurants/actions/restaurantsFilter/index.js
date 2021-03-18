import { RestaurantsFilterTypes } from 'features/restaurants/types';

export const setFilter = (filter) => {
  return {
    type: RestaurantsFilterTypes.SET_FILTER,
    payload: { filter },
  };
};

export const resetFilter = () => {
  return {
    type: RestaurantsFilterTypes.RESET_FILTER,
  };
};

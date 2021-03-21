import { RestaurantsFilterTypes } from 'features/restaurants/types';
import { NavigationService } from 'shared/services';

export const setFilter = (filter) => {
  NavigationService.goBack();
  return {
    type: RestaurantsFilterTypes.SET_FILTER,
    payload: { filter },
  };
};

export const resetFilter = () => {
  NavigationService.goBack();
  return {
    type: RestaurantsFilterTypes.RESET_FILTER,
  };
};

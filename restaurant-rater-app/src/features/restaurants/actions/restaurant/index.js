import { RestaurantTypes } from 'features/restaurants/types';
import { RestaurantsService } from 'api';

export function getRestaurant(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: RestaurantTypes.GET_RESTAURANT_START });
      const { result } = await RestaurantsService.getRestaurant(id);
      dispatch({ type: RestaurantTypes.GET_RESTAURANT, payload: { restaurant: result } });
    } catch (exception) {
      dispatch({ type: RestaurantTypes.GET_RESTAURANT_ERROR });
    }
  };
}

import { RestaurantsTypes } from 'features/restaurants/types';
import { RestaurantsClient } from 'api/clients';

export function getRestaurants(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: RestaurantsTypes.GET_RESTAURANTS_START });
      const { result, count } = await RestaurantsClient.getRestaurants(request);
      dispatch({ type: RestaurantsTypes.GET_RESTAURANTS, payload: { restaurants: result, count } });
    } catch (exception) {
      dispatch({ type: RestaurantsTypes.GET_RESTAURANTS_ERROR });
    }
  };
}

export function refreshRestaurants(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: RestaurantsTypes.REFRESH_RESTAURANTS_START });
      const { result, count } = await RestaurantsClient.getRestaurants(request);
      dispatch({
        type: RestaurantsTypes.REFRESH_RESTAURANTS,
        payload: { restaurants: result, count },
      });
    } catch (exception) {
      console.log(exception);
      dispatch({ type: RestaurantsTypes.REFRESH_RESTAURANTS_ERROR });
    }
  };
}

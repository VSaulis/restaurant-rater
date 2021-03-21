import { RestaurantTypes } from 'features/restaurants/types';
import { RestaurantsClient } from 'api/clients';
import { FlashMessageService } from 'shared/services';

export function getRestaurant(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: RestaurantTypes.GET_RESTAURANT_START });
      const { result } = await RestaurantsClient.getRestaurant(id);
      dispatch({ type: RestaurantTypes.GET_RESTAURANT, payload: { restaurant: result } });
    } catch (exception) {
      dispatch({ type: RestaurantTypes.GET_RESTAURANT_ERROR });
    }
  };
}

export function refreshRestaurant(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: RestaurantTypes.REFRESH_RESTAURANT_START });
      const { result } = await RestaurantsClient.getRestaurant(id);
      dispatch({ type: RestaurantTypes.REFRESH_RESTAURANT, payload: { restaurant: result } });
    } catch (exception) {
      dispatch({ type: RestaurantTypes.REFRESH_RESTAURANT_ERROR });
    }
  };
}

export function editRestaurant(id, request) {
  return async (dispatch) => {
    try {
      dispatch({ type: RestaurantTypes.EDIT_RESTAURANT_START });
      const { result } = await RestaurantsClient.editRestaurant(id, request);
      dispatch({ type: RestaurantTypes.EDIT_RESTAURANT, payload: { restaurant: result } });
      FlashMessageService.showSuccess('Restaurant is successfully updated');
    } catch (exception) {
      dispatch({ type: RestaurantTypes.EDIT_RESTAURANT_ERROR });
    }
  };
}

export function addRestaurant(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: RestaurantTypes.ADD_RESTAURANT_START });
      await RestaurantsClient.addRestaurant(request);
      dispatch({ type: RestaurantTypes.ADD_RESTAURANT });
      FlashMessageService.showSuccess('Restaurant is successfully added');
    } catch (exception) {
      console.log(exception);
      dispatch({ type: RestaurantTypes.ADD_RESTAURANT_ERROR });
    }
  };
}

export function deleteRestaurant(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: RestaurantTypes.DELETE_RESTAURANT_START });
      await RestaurantsClient.deleteRestaurant(id);
      dispatch({ type: RestaurantTypes.DELETE_RESTAURANT, payload: { id } });
      FlashMessageService.showSuccess('Restaurant is successfully deleted');
    } catch (exception) {
      dispatch({ type: RestaurantTypes.DELETE_RESTAURANT_ERROR });
    }
  };
}

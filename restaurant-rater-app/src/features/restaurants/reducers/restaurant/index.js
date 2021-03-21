import update from 'immutability-helper';
import { RestaurantTypes } from 'features/restaurants/types';
import { AuthTypes } from 'features/auth/types';

const initialState = {
  restaurant: null,
  isLoading: false,
  isRefreshing: false,
  isDeleting: false,
  isUpdating: false,
  isAdding: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RestaurantTypes.ADD_RESTAURANT_START: {
      return update(state, {
        isAdding: { $set: true },
      });
    }

    case RestaurantTypes.ADD_RESTAURANT_ERROR:
    case RestaurantTypes.ADD_RESTAURANT: {
      return update(state, {
        isAdding: { $set: false },
      });
    }

    case RestaurantTypes.DELETE_RESTAURANT_START: {
      return update(state, {
        isDeleting: { $set: true },
      });
    }

    case RestaurantTypes.DELETE_RESTAURANT_ERROR: {
      return update(state, {
        isDeleting: { $set: false },
      });
    }

    case RestaurantTypes.DELETE_RESTAURANT: {
      return update(state, {
        isDeleting: { $set: false },
        restaurant: { $set: null },
      });
    }

    case RestaurantTypes.EDIT_RESTAURANT_START: {
      return update(state, {
        isUpdating: { $set: true },
      });
    }

    case RestaurantTypes.EDIT_RESTAURANT: {
      return update(state, {
        isUpdating: { $set: false },
      });
    }

    case RestaurantTypes.EDIT_RESTAURANT_ERROR: {
      return update(state, {
        isUpdating: { $set: false },
      });
    }

    case RestaurantTypes.GET_RESTAURANT_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case RestaurantTypes.REFRESH_RESTAURANT_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case RestaurantTypes.GET_RESTAURANT: {
      return update(state, {
        isLoading: { $set: false },
        restaurant: { $set: payload.restaurant },
      });
    }

    case RestaurantTypes.REFRESH_RESTAURANT: {
      return update(state, {
        isRefreshing: { $set: false },
        restaurant: { $set: payload.restaurant },
      });
    }

    case AuthTypes.LOGOUT:
    case RestaurantTypes.REFRESH_RESTAURANT_ERROR:
    case RestaurantTypes.GET_RESTAURANT_ERROR: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

import update from 'immutability-helper';
import { RestaurantsTypes } from 'features/restaurants/types';
import { AuthTypes } from 'features/auth/types';

const initialState = {
  restaurants: [],
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RestaurantsTypes.GET_RESTAURANTS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case RestaurantsTypes.REFRESH_RESTAURANTS_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case RestaurantsTypes.REFRESH_RESTAURANTS: {
      return update(state, {
        isRefreshing: { $set: false },
        restaurants: { $set: payload.restaurants },
        count: { $set: payload.count },
      });
    }

    case RestaurantsTypes.GET_RESTAURANTS: {
      return update(state, {
        isLoading: { $set: false },
        restaurants: { $set: state.restaurants.concat(payload.restaurants) },
        count: { $set: payload.count },
      });
    }

    case AuthTypes.LOGOUT:
    case RestaurantsTypes.GET_RESTAURANTS_ERROR:
    case RestaurantsTypes.REFRESH_RESTAURANTS_ERROR: {
      return initialState;
    }

    default:
      return state;
  }
};

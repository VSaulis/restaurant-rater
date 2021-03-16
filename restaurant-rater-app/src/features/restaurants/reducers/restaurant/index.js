import update from 'immutability-helper';
import { RestaurantTypes } from 'features/restaurants/types';

const initialState = {
  restaurant: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RestaurantTypes.GET_RESTAURANT_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case RestaurantTypes.GET_RESTAURANT: {
      return update(state, {
        isLoading: { $set: false },
        restaurant: { $set: payload.restaurant },
      });
    }

    case RestaurantTypes.GET_RESTAURANT_ERROR: {
      return initialState;
    }

    default:
      return state;
  }
};

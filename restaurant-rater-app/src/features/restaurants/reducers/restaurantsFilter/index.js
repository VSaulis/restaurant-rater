import update from 'immutability-helper';
import { RestaurantsFilterTypes } from 'features/restaurants/types';
import { AuthTypes } from 'features/auth/types';

const defaultFilter = {
  lowestRating: null,
};

const initialState = {
  filter: defaultFilter,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RestaurantsFilterTypes.SET_FILTER: {
      return update(state, {
        filter: { $set: payload.filter },
      });
    }

    case RestaurantsFilterTypes.RESET_FILTER: {
      return update(state, {
        filter: { $set: defaultFilter },
      });
    }

    case AuthTypes.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

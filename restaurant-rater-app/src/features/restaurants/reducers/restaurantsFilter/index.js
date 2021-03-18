import update from 'immutability-helper';
import { RestaurantsFilterTypes } from 'features/restaurants/types';

const defaultFilter = {
  categories: [],
  ratings: [],
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

    default: {
      return state;
    }
  }
};

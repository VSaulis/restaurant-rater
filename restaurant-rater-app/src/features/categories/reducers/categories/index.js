import update from 'immutability-helper';
import { CategoriesTypes } from 'features/categories/types';
import { AuthTypes } from 'features/auth/types';

const initialState = {
  categories: [],
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CategoriesTypes.GET_CATEGORIES_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case CategoriesTypes.REFRESH_CATEGORIES_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case CategoriesTypes.REFRESH_CATEGORIES: {
      return update(state, {
        isRefreshing: { $set: false },
        categories: { $set: payload.categories },
        count: { $set: payload.count },
      });
    }

    case CategoriesTypes.GET_CATEGORIES: {
      return update(state, {
        isLoading: { $set: false },
        categories: { $set: state.categories.concat(payload.categories) },
        count: { $set: payload.count },
      });
    }

    case AuthTypes.LOGOUT:
    case CategoriesTypes.GET_CATEGORIES_ERROR:
    case CategoriesTypes.REFRESH_CATEGORIES_ERROR: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

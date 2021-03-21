import update from 'immutability-helper';
import { CategoryTypes } from 'features/categories/types';
import { AuthTypes } from 'features/auth/types';

const initialState = {
  category: null,
  isLoading: false,
  isRefreshing: false,
  isDeleting: false,
  isUpdating: false,
  isAdding: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CategoryTypes.ADD_CATEGORY_START: {
      return update(state, {
        isAdding: { $set: true },
      });
    }

    case CategoryTypes.ADD_CATEGORY_ERROR:
    case CategoryTypes.ADD_CATEGORY: {
      return update(state, {
        isAdding: { $set: false },
      });
    }

    case CategoryTypes.DELETE_CATEGORY_START: {
      return update(state, {
        isDeleting: { $set: true },
      });
    }

    case CategoryTypes.DELETE_CATEGORY_ERROR: {
      return update(state, {
        isDeleting: { $set: false },
      });
    }

    case CategoryTypes.DELETE_CATEGORY: {
      return update(state, {
        isDeleting: { $set: false },
        category: { $set: null },
      });
    }

    case CategoryTypes.EDIT_CATEGORY_START: {
      return update(state, {
        isUpdating: { $set: true },
      });
    }

    case CategoryTypes.EDIT_CATEGORY: {
      return update(state, {
        isUpdating: { $set: false },
      });
    }

    case CategoryTypes.EDIT_CATEGORY_ERROR: {
      return update(state, {
        isUpdating: { $set: false },
      });
    }

    case CategoryTypes.GET_CATEGORY_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case CategoryTypes.REFRESH_CATEGORY_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case CategoryTypes.GET_CATEGORY: {
      return update(state, {
        isLoading: { $set: false },
        category: { $set: payload.category },
      });
    }

    case CategoryTypes.REFRESH_CATEGORY: {
      return update(state, {
        isRefreshing: { $set: false },
        category: { $set: payload.category },
      });
    }

    case AuthTypes.LOGOUT:
    case CategoryTypes.REFRESH_CATEGORY_ERROR:
    case CategoryTypes.GET_CATEGORY_ERROR: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

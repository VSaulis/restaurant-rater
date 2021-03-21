import update from 'immutability-helper';
import { ReviewTypes } from 'features/reviews/types';
import { AuthTypes } from 'features/auth/types';

const initialState = {
  review: null,
  isLoading: false,
  isRefreshing: false,
  isDeleting: false,
  isUpdating: false,
  isAdding: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ReviewTypes.ADD_REVIEW_START: {
      return update(state, {
        isAdding: { $set: true },
      });
    }

    case ReviewTypes.ADD_REVIEW_ERROR:
    case ReviewTypes.ADD_REVIEW: {
      return update(state, {
        isAdding: { $set: false },
      });
    }

    case ReviewTypes.DELETE_REVIEW_START: {
      return update(state, {
        isDeleting: { $set: true },
      });
    }

    case ReviewTypes.DELETE_REVIEW_ERROR: {
      return update(state, {
        isDeleting: { $set: false },
      });
    }

    case ReviewTypes.DELETE_REVIEW: {
      return update(state, {
        isDeleting: { $set: false },
        review: { $set: null },
      });
    }

    case ReviewTypes.EDIT_REVIEW_START: {
      return update(state, {
        isUpdating: { $set: true },
      });
    }

    case ReviewTypes.EDIT_REVIEW: {
      return update(state, {
        isUpdating: { $set: false },
      });
    }

    case ReviewTypes.EDIT_REVIEW_ERROR: {
      return update(state, {
        isUpdating: { $set: false },
      });
    }

    case ReviewTypes.GET_REVIEW_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case ReviewTypes.REFRESH_REVIEW_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case ReviewTypes.GET_REVIEW: {
      return update(state, {
        isLoading: { $set: false },
        review: { $set: payload.review },
      });
    }

    case ReviewTypes.REFRESH_REVIEW: {
      return update(state, {
        isRefreshing: { $set: false },
        review: { $set: payload.review },
      });
    }

    case AuthTypes.LOGOUT:
    case ReviewTypes.REFRESH_REVIEW_ERROR:
    case ReviewTypes.REFRESH_REVIEW_ERROR: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

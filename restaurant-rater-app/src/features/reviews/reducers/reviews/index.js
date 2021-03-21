import update from 'immutability-helper';
import { ReviewsTypes } from 'features/reviews/types';
import { AuthTypes } from 'features/auth/types';

const initialState = {
  reviews: [],
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ReviewsTypes.GET_REVIEWS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case ReviewsTypes.REFRESH_REVIEWS_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case ReviewsTypes.REFRESH_REVIEWS: {
      return update(state, {
        isRefreshing: { $set: false },
        reviews: { $set: payload.reviews },
        count: { $set: payload.count },
      });
    }

    case ReviewsTypes.GET_REVIEWS: {
      return update(state, {
        isLoading: { $set: false },
        reviews: { $set: state.reviews.concat(payload.reviews) },
        count: { $set: payload.count },
      });
    }

    case AuthTypes.LOGOUT:
    case ReviewsTypes.GET_REVIEWS_ERROR:
    case ReviewsTypes.REFRESH_REVIEWS_ERROR: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

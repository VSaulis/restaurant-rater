import update from 'immutability-helper';
import { UserTypes } from 'features/users/types';
import { AuthTypes } from 'features/auth/types';

const initialState = {
  user: null,
  isLoading: false,
  isRefreshing: false,
  isDeleting: false,
  isUpdating: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UserTypes.DELETE_USER_START: {
      return update(state, {
        isDeleting: { $set: true },
      });
    }

    case UserTypes.DELETE_USER_ERROR: {
      return update(state, {
        isDeleting: { $set: false },
      });
    }

    case UserTypes.DELETE_USER: {
      return update(state, {
        isDeleting: { $set: false },
        user: { $set: null },
      });
    }

    case UserTypes.EDIT_USER_START: {
      return update(state, {
        isUpdating: { $set: true },
      });
    }

    case UserTypes.EDIT_USER: {
      return update(state, {
        isUpdating: { $set: false },
      });
    }

    case UserTypes.EDIT_USER_ERROR: {
      return update(state, {
        isUpdating: { $set: false },
      });
    }

    case UserTypes.GET_USER_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case UserTypes.REFRESH_USER_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case UserTypes.GET_USER: {
      return update(state, {
        isLoading: { $set: false },
        user: { $set: payload.user },
      });
    }

    case UserTypes.REFRESH_USER: {
      return update(state, {
        isRefreshing: { $set: false },
        user: { $set: payload.user },
      });
    }

    case AuthTypes.LOGOUT:
    case UserTypes.REFRESH_USER_ERROR:
    case UserTypes.GET_USER_ERROR: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

import update from 'immutability-helper';
import { UsersTypes } from 'features/users/types';
import { AuthTypes } from 'features/auth/types';

const initialState = {
  users: [],
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UsersTypes.GET_USERS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case UsersTypes.REFRESH_USERS_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case UsersTypes.REFRESH_USERS: {
      return update(state, {
        isRefreshing: { $set: false },
        users: { $set: payload.users },
        count: { $set: payload.count },
      });
    }

    case UsersTypes.GET_USERS: {
      return update(state, {
        isLoading: { $set: false },
        users: { $set: state.users.concat(payload.users) },
        count: { $set: payload.count },
      });
    }

    case AuthTypes.LOGOUT:
    case UsersTypes.GET_USERS_ERROR:
    case UsersTypes.REFRESH_USERS_ERROR: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

import update from 'immutability-helper';
import { AuthTypes } from 'features/auth/types';

const initialState = {
  isLogged: false,
  isLoading: false,
  isRefreshing: false,
  permissions: [],
  role: null,
  token: null,
  refreshToken: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AuthTypes.REGISTER_START:
    case AuthTypes.LOGIN_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case AuthTypes.REGISTER:
    case AuthTypes.LOGIN: {
      return update(state, {
        isLoading: { $set: false },
        isLogged: { $set: true },
        token: { $set: payload.token },
        refreshToken: { $set: payload.refreshToken },
        permissions: { $set: payload.permissions },
        role: { $set: payload.role },
      });
    }

    case AuthTypes.REGISTER_ERROR:
    case AuthTypes.LOGIN_ERROR:
    case AuthTypes.LOGOUT: {
      return initialState;
    }

    default:
      return state;
  }
};

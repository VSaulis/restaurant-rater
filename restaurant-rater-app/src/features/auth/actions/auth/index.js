import { AuthTypes } from 'features/auth/types';
import { AuthClient } from 'api/clients';
import { ProfileTypes } from 'features/profile/types';

export function logout() {
  return { type: AuthTypes.LOGOUT };
}

export function login(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: AuthTypes.LOGIN_START });
      const { result } = await AuthClient.login(request);
      dispatch({ type: AuthTypes.LOGIN, payload: result });
      dispatch({ type: ProfileTypes.GET_PROFILE, payload: { profile: result.profile } });
    } catch (exception) {
      dispatch({ type: AuthTypes.LOGIN_ERROR });
    }
  };
}

export function register(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: AuthTypes.REGISTER_START });
      const { result } = await AuthClient.register(request);
      dispatch({ type: AuthTypes.REGISTER, payload: result });
      dispatch({ type: ProfileTypes.GET_PROFILE, payload: { profile: result.profile } });
    } catch (exception) {
      dispatch({ type: AuthTypes.REGISTER_ERROR });
    }
  };
}

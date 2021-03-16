import { AuthTypes } from 'features/auth/types';
import { AuthService } from 'api';

export function logout() {
  return { type: AuthTypes.LOGOUT };
}

export function login(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: AuthTypes.LOGIN_START });
      const { result } = await AuthService.login(request);
      dispatch({ type: AuthTypes.LOGIN, payload: result });
    } catch (exception) {
      console.log(exception);
      dispatch({ type: AuthTypes.LOGIN_ERROR });
    }
  };
}

export function register(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: AuthTypes.REGISTER_START });
      const { result } = await AuthService.register(request);
      dispatch({ type: AuthTypes.REGISTER, payload: result });
    } catch (exception) {
      dispatch({ type: AuthTypes.REGISTER_ERROR });
    }
  };
}

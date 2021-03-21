import { UsersTypes } from 'features/users/types';
import { UsersClient } from 'api/clients';

export function getUsers(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: UsersTypes.GET_USERS_START });
      const { result, count } = await UsersClient.getUsers(request);
      dispatch({ type: UsersTypes.GET_USERS, payload: { users: result, count } });
    } catch (exception) {
      dispatch({ type: UsersTypes.GET_USERS_ERROR });
    }
  };
}

export function refreshUsers(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: UsersTypes.REFRESH_USERS_START });
      const { result, count } = await UsersClient.getUsers(request);
      dispatch({ type: UsersTypes.REFRESH_USERS, payload: { users: result, count } });
    } catch (exception) {
      dispatch({ type: UsersTypes.REFRESH_USERS_ERROR });
    }
  };
}

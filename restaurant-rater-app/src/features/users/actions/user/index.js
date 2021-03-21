import { UserTypes } from 'features/users/types';
import { UsersClient } from 'api/clients';
import { FlashMessageService } from 'shared/services';

export function getUser(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: UserTypes.GET_USER_START });
      const { result } = await UsersClient.getUser(id);
      dispatch({ type: UserTypes.GET_USER, payload: { user: result } });
    } catch (exception) {
      dispatch({ type: UserTypes.GET_USER_ERROR });
    }
  };
}

export function refreshUser(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: UserTypes.REFRESH_USER_START });
      const { result } = await UsersClient.getUser(id);
      dispatch({ type: UserTypes.REFRESH_USER, payload: { user: result } });
    } catch (exception) {
      dispatch({ type: UserTypes.REFRESH_USER_ERROR });
    }
  };
}

export function editUser(id, request) {
  return async (dispatch) => {
    try {
      dispatch({ type: UserTypes.EDIT_USER_START });
      const { result } = await UsersClient.editUser(id, request);
      dispatch({ type: UserTypes.EDIT_USER, payload: { user: result } });
      FlashMessageService.showSuccess('User is successfully updated');
    } catch (exception) {
      console.log(exception);
      dispatch({ type: UserTypes.EDIT_USER_ERROR });
    }
  };
}

export function deleteUser(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: UserTypes.DELETE_USER_START });
      await UsersClient.deleteUser(id);
      dispatch({ type: UserTypes.DELETE_USER, payload: { id } });
      FlashMessageService.showSuccess('Category is successfully deleted');
    } catch (exception) {
      dispatch({ type: UserTypes.DELETE_USER_ERROR });
    }
  };
}

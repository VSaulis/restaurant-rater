import { ProfileTypes } from 'features/profile/types';
import { ProfileClient, AuthClient } from 'api/clients';
import { FlashMessageService, NavigationService } from 'shared/services';
import { AuthActions } from 'features/auth/actions';

export function getProfile() {
  return async (dispatch) => {
    try {
      dispatch({ type: ProfileTypes.GET_PROFILE_START });
      const { result } = await ProfileClient.getProfile();
      dispatch({ type: ProfileTypes.GET_PROFILE, payload: { profile: result } });
    } catch (exception) {
      dispatch({ type: ProfileTypes.GET_PROFILE_ERROR });
    }
  };
}

export function refreshProfile() {
  return async (dispatch) => {
    try {
      dispatch({ type: ProfileTypes.REFRESH_PROFILE_START });
      const { result } = await ProfileClient.getProfile();
      dispatch({ type: ProfileTypes.REFRESH_PROFILE, payload: { profile: result } });
    } catch (exception) {
      dispatch({ type: ProfileTypes.REFRESH_PROFILE_ERROR });
    }
  };
}

export function deleteProfile() {
  return async (dispatch) => {
    try {
      dispatch({ type: ProfileTypes.DELETE_PROFILE_START });
      await AuthClient.deleteAccount();
      dispatch({ type: ProfileTypes.DELETE_PROFILE });
      FlashMessageService.showSuccess('Profile is successfully deleted');
      dispatch(AuthActions.logout());
    } catch (exception) {
      dispatch({ type: ProfileTypes.DELETE_PROFILE_ERROR });
    }
  };
}

export function editProfile(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: ProfileTypes.EDIT_PROFILE_START });
      const { result } = await ProfileClient.editProfile(request);
      dispatch({ type: ProfileTypes.EDIT_PROFILE, payload: { profile: result } });
      FlashMessageService.showSuccess('Profile is successfully updated');
      NavigationService.goBack();
    } catch (exception) {
      dispatch({ type: ProfileTypes.EDIT_PROFILE_ERROR });
    }
  };
}

export function changePassword(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: ProfileTypes.CHANGE_PASSWORD_START });
      await AuthClient.changePassword(request);
      dispatch({ type: ProfileTypes.CHANGE_PASSWORD });
      FlashMessageService.showSuccess('Password is successfully changed');
      NavigationService.goBack();
    } catch (exception) {
      dispatch({ type: ProfileTypes.CHANGE_PASSWORD_ERROR });
    }
  };
}

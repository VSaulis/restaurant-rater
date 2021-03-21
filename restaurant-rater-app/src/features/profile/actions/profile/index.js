import { ProfileTypes } from 'features/profile/types';
import { ProfileClient, AuthClient } from 'api/clients';
import { FlashMessageService } from 'shared/services';

export function getProfile() {
  return async (dispatch) => {
    try {
      dispatch({ type: ProfileTypes.GET_PROFILE_START });
      const { result } = await ProfileClient.getProfile();
      dispatch({ type: ProfileTypes.GET_PROFILE, payload: { question: result } });
    } catch (exception) {
      dispatch({ type: ProfileTypes.GET_PROFILE_ERROR });
    }
  };
}

export function editProfile(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: ProfileTypes.UPDATE_PROFILE_START });
      const { result } = await ProfileClient.updateProfile(request);
      dispatch({ type: ProfileTypes.UPDATE_PROFILE, payload: { question: result } });
    } catch (exception) {
      dispatch({ type: ProfileTypes.UPDATE_PROFILE_ERROR });
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
    } catch (exception) {
      dispatch({ type: ProfileTypes.CHANGE_PASSWORD_ERROR });
    }
  };
}

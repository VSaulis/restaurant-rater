import { ProfileTypes } from 'features/profile/types';
import { ProfileClient } from 'api/clients';

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

export function updateProfile(request) {
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

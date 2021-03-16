import { ProfileTypes } from 'features/profile/types';
import { ProfileService } from 'api';

export function getProfile() {
  return async (dispatch) => {
    try {
      dispatch({ type: ProfileTypes.GET_PROFILE_START });
      const { result } = await ProfileService.getProfile();
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
      const { result } = await ProfileService.updateProfile(request);
      dispatch({ type: ProfileTypes.UPDATE_PROFILE, payload: { question: result } });
    } catch (exception) {
      dispatch({ type: ProfileTypes.UPDATE_PROFILE_ERROR });
    }
  };
}

import update from 'immutability-helper';
import { ProfileTypes } from 'features/profile/types';
import { AuthTypes } from 'features/auth/types';

const initialState = {
  profile: null,
  isLoading: false,
  isUpdating: false,
  isRefreshing: false,
  isDeleting: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ProfileTypes.GET_PROFILE_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case ProfileTypes.DELETE_PROFILE_START: {
      return update(state, {
        isDeleting: { $set: true },
      });
    }

    case ProfileTypes.DELETE_PROFILE_ERROR: {
      return update(state, {
        isDeleting: { $set: false },
      });
    }

    case ProfileTypes.REFRESH_PROFILE_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case ProfileTypes.CHANGE_PASSWORD_START:
    case ProfileTypes.EDIT_PROFILE_START: {
      return update(state, {
        isUpdating: { $set: true },
      });
    }

    case ProfileTypes.CHANGE_PASSWORD: {
      return update(state, {
        isUpdating: { $set: false },
      });
    }

    case ProfileTypes.EDIT_PROFILE: {
      return update(state, {
        profile: { $set: payload.profile },
        isUpdating: { $set: false },
      });
    }

    case ProfileTypes.GET_PROFILE: {
      return update(state, {
        profile: { $set: payload.profile },
        isLoading: { $set: false },
      });
    }

    case ProfileTypes.REFRESH_PROFILE: {
      return update(state, {
        profile: { $set: payload.profile },
        isRefreshing: { $set: false },
      });
    }

    case ProfileTypes.EDIT_PROFILE_ERROR:
    case ProfileTypes.CHANGE_PASSWORD_ERROR: {
      return update(state, {
        isUpdating: { $set: false },
      });
    }

    case AuthTypes.LOGOUT:
    case ProfileTypes.DELETE_PROFILE:
    case ProfileTypes.REFRESH_PROFILE_ERROR:
    case ProfileTypes.GET_PROFILE_ERROR: {
      return initialState;
    }

    default:
      return state;
  }
};

import update from 'immutability-helper';
import { ProfileTypes } from 'features/profile/types';

const initialState = {
  profile: false,
  isLoading: false,
  isUpdating: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ProfileTypes.GET_PROFILE_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case ProfileTypes.UPDATE_PROFILE_START: {
      return update(state, {
        isUpdating: { $set: true },
      });
    }

    case ProfileTypes.UPDATE_PROFILE: {
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

    case ProfileTypes.GET_PROFILE_ERROR:
    case ProfileTypes.UPDATE_PROFILE_ERROR: {
      return initialState;
    }

    default:
      return state;
  }
};

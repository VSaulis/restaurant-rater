import { PROFILE_MOCK } from './mocks';

export const getProfile = async () => {
  return Promise.resolve({
    result: {
      profile: PROFILE_MOCK,
    },
  });
};

export const updateProfile = async () => {
  return Promise.resolve({
    result: {
      profile: PROFILE_MOCK,
    },
  });
};

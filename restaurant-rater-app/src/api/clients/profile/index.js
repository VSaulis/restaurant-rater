import { PROFILE_MOCK } from 'api/clients/profile/mocks';

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

import React from 'react';
import { Profile } from 'features/profile/containers';
import { ScreenContainer } from 'shared/components';

const ProfileScreen = () => {
  return (
    <ScreenContainer>
      <Profile />
    </ScreenContainer>
  );
};

export default ProfileScreen;

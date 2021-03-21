import React from 'react';
import { Profile } from 'features/profile/containers';
import { FullScreenContainer } from 'shared/components';

const ProfileScreen = () => {
  return (
    <FullScreenContainer>
      <Profile />
    </FullScreenContainer>
  );
};

export default ProfileScreen;

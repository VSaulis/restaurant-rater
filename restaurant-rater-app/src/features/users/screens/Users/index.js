import React from 'react';
import { Users } from 'features/users/containers';
import { ScreenContainer } from 'shared/components';

const UsersScreen = () => {
  return (
    <ScreenContainer>
      <Users />
    </ScreenContainer>
  );
};

export default UsersScreen;

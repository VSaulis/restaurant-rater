import React from 'react';
import { Users } from 'features/users/containers';
import { PrimaryHeader, ScreenContainer } from 'shared/components';

const UsersScreen = () => {
  return (
    <ScreenContainer>
      <PrimaryHeader title="Users" />
      <Users />
    </ScreenContainer>
  );
};

export default UsersScreen;

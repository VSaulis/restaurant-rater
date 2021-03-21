import React from 'react';
import { UserDelete } from 'features/users/containers';
import { ScreenContainer } from 'shared/components';

const UserDeleteScreen = (props) => {
  const { route } = props;

  return (
    <ScreenContainer>
      <UserDelete id={route.params.id} />
    </ScreenContainer>
  );
};

export default UserDeleteScreen;

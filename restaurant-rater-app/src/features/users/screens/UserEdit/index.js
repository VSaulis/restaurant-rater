import React from 'react';
import { UserEdit } from 'features/users/containers';
import { ScreenContainer } from 'shared/components';

const UserEditScreen = (props) => {
  const { route } = props;

  return (
    <ScreenContainer>
      <UserEdit id={route.params.id} />
    </ScreenContainer>
  );
};

export default UserEditScreen;

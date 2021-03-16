import React from 'react';
import { Login } from 'features/auth/containers';
import { ScreenContainer } from 'shared/components';

const LoginScreen = () => {
  return (
    <ScreenContainer>
      <Login />
    </ScreenContainer>
  );
};

export default LoginScreen;

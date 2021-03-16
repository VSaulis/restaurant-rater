import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Screens } from 'shared/constant';
import { LoginScreen, RegistrationScreen } from 'features/auth/screens';

const AuthStack = createStackNavigator();

const OPTIONS = {
  headerShown: false,
};

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={OPTIONS}>
      <AuthStack.Screen name={Screens.LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={Screens.REGISTRATION} component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;

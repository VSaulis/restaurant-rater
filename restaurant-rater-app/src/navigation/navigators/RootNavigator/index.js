import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navigators } from 'shared/constant';
import MainNavigator from '../MainNavigator';
import AuthNavigator from '../AuthNavigator';
import { useAuth } from 'features/auth/hooks';

const RootStack = createStackNavigator();

const OPTIONS = {
  headerShown: false,
};

function RootNavigator() {
  const { isLogged } = useAuth();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={OPTIONS}>
        {isLogged && <RootStack.Screen name={Navigators.MAIN} component={MainNavigator} />}
        {!isLogged && <RootStack.Screen name={Navigators.AUTH} component={AuthNavigator} />}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;

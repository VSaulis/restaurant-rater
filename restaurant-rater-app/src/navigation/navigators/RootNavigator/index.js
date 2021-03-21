import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navigators, Screens } from 'shared/constant';
import MainNavigator from '../MainNavigator';
import AuthNavigator from '../AuthNavigator';
import { useAuth } from 'features/auth/hooks';
import { WalkthroughScreen } from 'features/walkthrough/screens';
import { useWalkthrough } from 'features/walkthrough/hooks';
import { NavigationService } from 'shared/services';

const RootStack = createStackNavigator();

const OPTIONS = {
  headerShown: false,
};

function RootNavigator() {
  const { isLogged } = useAuth();
  const { isWalkthroughCompleted } = useWalkthrough();

  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <RootStack.Navigator screenOptions={OPTIONS}>
        {!isWalkthroughCompleted && !isLogged && (
          <RootStack.Screen name={Screens.WALKTHROUGH} component={WalkthroughScreen} />
        )}
        {isWalkthroughCompleted && !isLogged && (
          <RootStack.Screen name={Navigators.AUTH} component={AuthNavigator} />
        )}
        {isLogged && (
          <RootStack.Screen name={Navigators.MAIN} component={MainNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Navigators, Screens } from 'shared/constant';
import TabsNavigator from '../TabsNavigator';
import { RestaurantScreen } from 'features/restaurants/screens';

const MainStack = createStackNavigator();

const OPTIONS = {
  headerShown: false,
};

function MainNavigator() {
  return (
    <MainStack.Navigator screenOptions={OPTIONS}>
      <MainStack.Screen name={Navigators.TABS} component={TabsNavigator} />
      <MainStack.Screen name={Screens.RESTAURANT} component={RestaurantScreen} />
    </MainStack.Navigator>
  );
}

export default MainNavigator;

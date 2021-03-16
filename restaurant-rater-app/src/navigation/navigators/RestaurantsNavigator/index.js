import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Screens } from 'shared/constant';
import { RestaurantsScreen } from 'features/restaurants/screens';
import { primaryHeaderOptions } from '../../config';

const SettingsStack = createStackNavigator();

function RestaurantsNavigator() {
  return (
    <SettingsStack.Navigator screenOptions={primaryHeaderOptions}>
      <SettingsStack.Screen
        options={{ title: 'Restaurants' }}
        name={Screens.RESTAURANTS}
        component={RestaurantsScreen}
      />
    </SettingsStack.Navigator>
  );
}

export default RestaurantsNavigator;

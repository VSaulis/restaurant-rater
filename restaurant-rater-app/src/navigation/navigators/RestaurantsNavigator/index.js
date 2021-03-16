import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Screens } from 'shared/constant';
import { RestaurantsScreen } from 'features/restaurants/screens';
import { primaryHeaderOptions } from '../../config';

const RestaurantsStack = createStackNavigator();

function RestaurantsNavigator() {
  return (
    <RestaurantsStack.Navigator screenOptions={primaryHeaderOptions}>
      <RestaurantsStack.Screen
        options={{ title: 'Restaurants' }}
        name={Screens.RESTAURANTS}
        component={RestaurantsScreen}
      />
    </RestaurantsStack.Navigator>
  );
}

export default RestaurantsNavigator;

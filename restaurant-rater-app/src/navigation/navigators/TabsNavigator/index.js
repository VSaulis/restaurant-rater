import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Navigators, Screens } from 'shared/constant';
import ProfileNavigator from '../ProfileNavigator';
import SettingsNavigator from '../SettingsNavigator';
import ReviewsNavigator from '../ReviewsNavigator';
import { RestaurantsScreen } from 'features/restaurants/screens';

const Tabs = createBottomTabNavigator();

const OPTIONS = {
  headerShown: false,
};

function TabsNavigator() {
  return (
    <Tabs.Navigator screenOptions={OPTIONS}>
      <Tabs.Screen name={Screens.RESTAURANTS} component={RestaurantsScreen} />
      <Tabs.Screen name={Navigators.REVIEWS} component={ReviewsNavigator} />
      <Tabs.Screen name={Navigators.PROFILE} component={ProfileNavigator} />
      <Tabs.Screen name={Navigators.SETTINGS} component={SettingsNavigator} />
    </Tabs.Navigator>
  );
}

export default TabsNavigator;

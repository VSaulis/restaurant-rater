import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Navigators } from 'shared/constant';
import ProfileNavigator from '../ProfileNavigator';
import SettingsNavigator from '../SettingsNavigator';
import RestaurantsNavigator from '../RestaurantsNavigator';

const Tabs = createBottomTabNavigator();

const OPTIONS = {
  headerShown: false,
};

function TabsNavigator() {
  return (
    <Tabs.Navigator screenOptions={OPTIONS}>
      <Tabs.Screen name={Navigators.RESTAURANTS} component={RestaurantsNavigator} />
      <Tabs.Screen name={Navigators.PROFILE} component={ProfileNavigator} />
      <Tabs.Screen name={Navigators.SETTINGS} component={SettingsNavigator} />
    </Tabs.Navigator>
  );
}

export default TabsNavigator;

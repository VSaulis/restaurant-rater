import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Screens } from 'shared/constant';
import { SettingsScreen } from 'features/settings/screens';

const SettingsStack = createStackNavigator();

const OPTIONS = {
  headerShown: true,
};

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator screenOptions={OPTIONS}>
      <SettingsStack.Screen name={Screens.SETTINGS} component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

export default SettingsNavigator;

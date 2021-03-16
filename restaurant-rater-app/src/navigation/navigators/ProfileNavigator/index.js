import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Screens } from 'shared/constant';
import { ProfileScreen } from 'features/profile/screens';
import { primaryHeaderOptions } from 'navigation/config';

const ProfileStack = createStackNavigator();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={primaryHeaderOptions}>
      <ProfileStack.Screen
        options={{ title: 'Profile' }}
        name={Screens.PROFILE}
        component={ProfileScreen}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileNavigator;

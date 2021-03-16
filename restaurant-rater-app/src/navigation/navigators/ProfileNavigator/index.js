import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Screens } from 'shared/constant';
import { ProfileScreen } from 'features/profile/screens';

const ProfileStack = createStackNavigator();

const OPTIONS = {
  headerShown: true,
};

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={OPTIONS}>
      <ProfileStack.Screen name={Screens.PROFILE} component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

export default ProfileNavigator;

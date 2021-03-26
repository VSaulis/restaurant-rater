import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Navigators, Screens } from 'shared/constant';
import TabsNavigator from '../TabsNavigator';
import {
  RestaurantAddScreen,
  RestaurantScreen,
  RestaurantsFilterScreen,
} from 'features/restaurants/screens';
import { UserDeleteScreen, UserEditScreen } from 'features/users/screens';
import {
  ProfileChangePasswordScreen,
  ProfileDeleteScreen,
  ProfileEditScreen,
} from 'features/profile/screens';
import { ReviewAddScreen, ReviewEditScreen } from 'features/reviews/screens';

const Stack = createStackNavigator();

const OPTIONS = {
  headerShown: true,
};

function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={OPTIONS}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={Navigators.TABS}
        component={TabsNavigator}
      />
      <Stack.Screen
        options={{ title: 'Restaurant' }}
        name={Screens.RESTAURANT}
        component={RestaurantScreen}
      />
      <Stack.Screen
        options={{ title: 'Add review' }}
        name={Screens.REVIEW_ADD}
        component={ReviewAddScreen}
      />
      <Stack.Screen
        options={{ title: 'Edit review' }}
        name={Screens.REVIEW_EDIT}
        component={ReviewEditScreen}
      />
      <Stack.Screen
        options={{ title: 'Delete user' }}
        name={Screens.USER_DELETE}
        component={UserDeleteScreen}
      />
      <Stack.Screen
        options={{ title: 'Edit user' }}
        name={Screens.USER_EDIT}
        component={UserEditScreen}
      />
      <Stack.Screen
        options={{ title: 'Filter' }}
        name={Screens.RESTAURANTS_FILTER}
        component={RestaurantsFilterScreen}
      />
      <Stack.Screen
        options={{ title: 'Add restaurant' }}
        name={Screens.RESTAURANT_ADD}
        component={RestaurantAddScreen}
      />
      <Stack.Screen
        options={{ title: 'Change password' }}
        name={Screens.PROFILE_CHANGE_PASSWORD}
        component={ProfileChangePasswordScreen}
      />
      <Stack.Screen
        options={{ title: 'Edit profile' }}
        name={Screens.PROFILE_EDIT}
        component={ProfileEditScreen}
      />
      <Stack.Screen
        options={{ title: 'Delete profile' }}
        name={Screens.PROFILE_DELETE}
        component={ProfileDeleteScreen}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;

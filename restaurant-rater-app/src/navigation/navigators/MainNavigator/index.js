import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Navigators, Screens } from 'shared/constant';
import TabsNavigator from '../TabsNavigator';
import {
  RestaurantAddScreen,
  RestaurantFormScreen,
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
  headerShown: false,
};

function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={OPTIONS}>
      <Stack.Screen name={Navigators.TABS} component={TabsNavigator} />
      <Stack.Screen name={Screens.RESTAURANT} component={RestaurantScreen} />
      <Stack.Screen name={Screens.REVIEW_ADD} component={ReviewAddScreen} />
      <Stack.Screen name={Screens.REVIEW_EDIT} component={ReviewEditScreen} />
      <Stack.Screen name={Screens.USER_DELETE} component={UserDeleteScreen} />
      <Stack.Screen name={Screens.USER_EDIT} component={UserEditScreen} />
      <Stack.Screen name={Screens.RESTAURANT_FORM} component={RestaurantFormScreen} />
      <Stack.Screen
        name={Screens.RESTAURANTS_FILTER}
        component={RestaurantsFilterScreen}
      />
      <Stack.Screen name={Screens.RESTAURANT_ADD} component={RestaurantAddScreen} />
      <Stack.Screen
        name={Screens.PROFILE_CHANGE_PASSWORD}
        component={ProfileChangePasswordScreen}
      />
      <Stack.Screen name={Screens.PROFILE_EDIT} component={ProfileEditScreen} />
      <Stack.Screen name={Screens.PROFILE_DELETE} component={ProfileDeleteScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;

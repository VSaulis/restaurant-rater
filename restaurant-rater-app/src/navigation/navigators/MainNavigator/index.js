import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Navigators, Screens } from 'shared/constant';
import TabsNavigator from '../TabsNavigator';
import {
  RestaurantAddScreen,
  RestaurantFormScreen,
  RestaurantScreen,
  RestaurantsFilterScreen,
  ReviewFormScreen,
} from 'features/restaurants/screens';
import { UserEditScreen } from 'features/users/screens';
import { CategoryAddScreen, CategoryEditScreen } from 'features/categories/screens';
import { ProfileChangePasswordScreen, ProfileEditScreen } from 'features/profile/screens';

const MainStack = createStackNavigator();

const OPTIONS = {
  headerShown: false,
};

function MainNavigator() {
  return (
    <MainStack.Navigator screenOptions={OPTIONS}>
      <MainStack.Screen name={Navigators.TABS} component={TabsNavigator} />
      <MainStack.Screen name={Screens.RESTAURANT} component={RestaurantScreen} />
      <MainStack.Screen name={Screens.REVIEW_FORM} component={ReviewFormScreen} />
      <MainStack.Screen name={Screens.USER_EDIT} component={UserEditScreen} />
      <MainStack.Screen name={Screens.RESTAURANT_FORM} component={RestaurantFormScreen} />
      <MainStack.Screen name={Screens.RESTAURANTS_FILTER} component={RestaurantsFilterScreen} />
      <MainStack.Screen name={Screens.CATEGORY_ADD} component={CategoryAddScreen} />
      <MainStack.Screen name={Screens.CATEGORY_EDIT} component={CategoryEditScreen} />
      <MainStack.Screen name={Screens.RESTAURANT_ADD} component={RestaurantAddScreen} />
      <MainStack.Screen
        name={Screens.PROFILE_CHANGE_PASSWORD}
        component={ProfileChangePasswordScreen}
      />
      <MainStack.Screen name={Screens.PROFILE_EDIT} component={ProfileEditScreen} />
    </MainStack.Navigator>
  );
}

export default MainNavigator;

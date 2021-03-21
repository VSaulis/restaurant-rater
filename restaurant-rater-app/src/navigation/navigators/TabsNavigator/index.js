import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Navigators, Permissions, Screens } from 'shared/constant';
import ProfileNavigator from '../ProfileNavigator';
import ReviewsNavigator from '../ReviewsNavigator';
import { RestaurantsScreen } from 'features/restaurants/screens';
import { usePermissions } from 'features/auth/hooks';
import { UsersScreen } from 'features/users/screens';
import { CategoriesScreen } from 'features/categories/screens';

const Tabs = createBottomTabNavigator();

const OPTIONS = {
  headerShown: false,
};

function TabsNavigator() {
  const { hasPermission } = usePermissions();
  const usersAccess = hasPermission(Permissions.Users.View);
  const categoriesAccess = hasPermission(Permissions.Categories.View);

  return (
    <Tabs.Navigator screenOptions={OPTIONS}>
      <Tabs.Screen name={Screens.RESTAURANTS} component={RestaurantsScreen} />
      <Tabs.Screen name={Navigators.REVIEWS} component={ReviewsNavigator} />
      {usersAccess && <Tabs.Screen name={Screens.USERS} component={UsersScreen} />}
      {categoriesAccess && <Tabs.Screen name={Screens.CATEGORIES} component={CategoriesScreen} />}
      <Tabs.Screen name={Navigators.PROFILE} component={ProfileNavigator} />
    </Tabs.Navigator>
  );
}

export default TabsNavigator;

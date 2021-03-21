import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Permissions, Screens } from 'shared/constant';
import { RestaurantsScreen } from 'features/restaurants/screens';
import { usePermissions } from 'features/auth/hooks';
import { UsersScreen } from 'features/users/screens';
import { CategoriesScreen } from 'features/categories/screens';
import { ProfileScreen } from 'features/profile/screens';
import { ReviewsScreen } from 'features/reviews/screens';

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
      <Tabs.Screen name={Screens.REVIEWS} component={ReviewsScreen} />
      {usersAccess && <Tabs.Screen name={Screens.USERS} component={UsersScreen} />}
      {categoriesAccess && (
        <Tabs.Screen name={Screens.CATEGORIES} component={CategoriesScreen} />
      )}
      <Tabs.Screen name={Screens.PROFILE} component={ProfileScreen} />
    </Tabs.Navigator>
  );
}

export default TabsNavigator;

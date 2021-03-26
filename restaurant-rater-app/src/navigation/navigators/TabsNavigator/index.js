import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Permissions, Screens } from 'shared/constant';
import { RestaurantsScreen } from 'features/restaurants/screens';
import { usePermissions, useRole } from 'features/auth/hooks';
import { UsersScreen } from 'features/users/screens';
import { ProfileScreen } from 'features/profile/screens';
import { ReviewsScreen } from 'features/reviews/screens';
import { Colors, Icons } from 'shared/styles';
import { Icon, PrimaryHeader } from 'shared/components';

const Tabs = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: Colors.NEW_PRIMARY,
  inactiveTintColor: Colors.NEW_GREY,
  labelStyle: {
    fontFamily: 'Regular',
    fontSize: 10,
  },
  style: {
    height: 55,
    elevation: 0,
    boxShadow: 'none',
    borderTopWidth: 1,
    borderTopColor: Colors.LIGHT_GREY_1,
  },
};

const restaurantOptions = {
  title: 'Restaurants',
  tabBarIcon: ({ color, size }) => <Icon color={color} size={size} name={Icons.COFFEE} />,
};

const reviewsOptions = {
  title: 'Reviews',
  tabBarIcon: ({ color, size }) => <Icon color={color} size={size} name={Icons.STAR} />,
};

const usersOptions = {
  title: 'Users',
  tabBarIcon: ({ color, size }) => <Icon color={color} size={size} name={Icons.USERS} />,
};

const profileOptions = {
  title: 'Profile',
  tabBarIcon: ({ color, size }) => <Icon color={color} size={size} name={Icons.USER} />,
};

function TabsNavigator() {
  const { hasPermission } = usePermissions();
  const { isRegularUser } = useRole();

  return (
    <Tabs.Navigator tabBarOptions={tabBarOptions}>
      {hasPermission(Permissions.Restaurants.View) && (
        <Tabs.Screen
          options={restaurantOptions}
          name={Screens.RESTAURANTS}
          component={RestaurantsScreen}
        />
      )}
      {!isRegularUser && (
        <Tabs.Screen
          options={reviewsOptions}
          name={Screens.REVIEWS}
          component={ReviewsScreen}
        />
      )}
      {hasPermission(Permissions.Users.View) && (
        <Tabs.Screen
          options={usersOptions}
          name={Screens.USERS}
          component={UsersScreen}
        />
      )}
      <Tabs.Screen
        options={profileOptions}
        name={Screens.PROFILE}
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
}

export default TabsNavigator;

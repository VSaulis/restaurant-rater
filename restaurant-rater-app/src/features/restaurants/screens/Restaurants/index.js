import React from 'react';
import { Restaurants } from 'features/restaurants/containers';
import { PrimaryHeader, ScreenContainer } from 'shared/components';
import { usePermissions } from 'features/auth/hooks';
import { Permissions, Screens } from 'shared/constant';
import { Icons } from 'shared/styles';
import { useNavigation } from '@react-navigation/native';

const RestaurantsScreen = () => {
  const { hasPermission } = usePermissions();
  const navigation = useNavigation();
  const createPermission = hasPermission(Permissions.Restaurants.Create);

  const addAction = {
    icon: Icons.ADD,
    onPress: () => navigation.navigate(Screens.RESTAURANT_ADD),
  };

  const filterAction = {
    icon: Icons.FILTER,
    onPress: () => navigation.navigate(Screens.RESTAURANTS_FILTER),
  };

  return (
    <ScreenContainer>
      <PrimaryHeader
        action={createPermission ? addAction : filterAction}
        title="Restaurants"
      />
      <Restaurants />
    </ScreenContainer>
  );
};

export default RestaurantsScreen;

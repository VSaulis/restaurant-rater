import React from 'react';
import * as Styles from './styles';
import { useRestaurants } from 'features/restaurants/hooks';
import { RestaurantsListItem } from 'features/restaurants/components';
import { useNavigation } from '@react-navigation/native';
import { Permissions, Screens } from 'shared/constant';
import { IconButton, ListSeparator } from 'shared/components';
import { Colors, Icons, Spacings, Typography } from 'shared/styles';
import { usePermissions } from 'features/auth/hooks';

const Restaurants = (props) => {
  const { style } = props;
  const { navigate } = useNavigation();
  const { hasPermission } = usePermissions();
  const { isRefreshing, isLoading, refresh, restaurants, loadMore, count } = useRestaurants({
    filter: {},
  });

  const createPermitted = hasPermission(Permissions.Restaurants.CREATE);

  return (
    <Styles.Container style={style}>
      <Styles.Header>
        <Typography.Heading>Restaurants</Typography.Heading>
        <Typography.Caption>{`${count} results found`}</Typography.Caption>
        {createPermitted && (
          <IconButton
            onPress={() => navigate(Screens.RESTAURANT_ADD)}
            iconColor={Colors.PRIMARY}
            icon={Icons.ADD}
          />
        )}
        {!createPermitted && (
          <IconButton
            onPress={() => navigate(Screens.RESTAURANTS_FILTER)}
            iconColor={Colors.PRIMARY}
            icon={Icons.FILTER}
          />
        )}
      </Styles.Header>
      <Styles.List
        contentContainerStyle={Spacings.FULL_PADDING}
        ItemSeparatorComponent={ListSeparator}
        refreshing={isRefreshing || isLoading}
        onRefresh={refresh}
        data={restaurants}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RestaurantsListItem
            onPress={() => navigate(Screens.RESTAURANT, { id: item.id })}
            restaurant={item}
          />
        )}
      />
    </Styles.Container>
  );
};

export default Restaurants;

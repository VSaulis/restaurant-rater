import React from 'react';
import { useRestaurants } from 'features/restaurants/hooks';
import { RestaurantsListItem } from 'features/restaurants/components';
import { useNavigation } from '@react-navigation/native';
import { Screens } from 'shared/constant';
import { ListSeparator, SearchInput } from 'shared/components';
import { Spacings, Containers } from 'shared/styles';

const Restaurants = () => {
  const { navigate } = useNavigation();
  const { isRefreshing, isLoading, refresh, restaurants, loadMore } = useRestaurants();

  const renderItem = ({ item }) => (
    <RestaurantsListItem
      onPress={() => navigate(Screens.RESTAURANT, { id: item.id, title: item.title })}
      restaurant={item}
    />
  );

  return (
    <Containers.FilledContainer>
      <Containers.Header>
        <SearchInput />
      </Containers.Header>
      <Containers.FlatList
        contentContainerStyle={Spacings.HORIZONTAL_PADDING.L}
        ItemSeparatorComponent={ListSeparator}
        refreshing={isRefreshing || isLoading}
        onRefresh={refresh}
        data={restaurants}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </Containers.FilledContainer>
  );
};

export default Restaurants;

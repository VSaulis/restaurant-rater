import React from 'react';
import * as Styles from './styles';
import { useRestaurants } from 'features/restaurants/hooks';
import { RestaurantsListItem } from 'features/restaurants/components';
import { useNavigation } from '@react-navigation/native';
import { Screens } from 'shared/constant';
import { ListSeparator } from 'shared/components';

const Restaurants = (props) => {
  const { style } = props;
  const navigation = useNavigation();
  const { isRefreshing, isLoading, refresh, restaurants, loadMore } = useRestaurants({
    filter: {},
    sort: {},
  });

  const handleItemPress = (id) => {
    navigation.navigate(Screens.RESTAURANT, { id });
  };

  const renderItem = ({ item }) => (
    <RestaurantsListItem onPress={() => handleItemPress(item.id)} restaurant={item} />
  );

  return (
    <Styles.Container style={style}>
      <Styles.List
        contentContainerStyle={Styles.ListContent}
        ItemSeparatorComponent={ListSeparator}
        refreshing={isRefreshing || isLoading}
        onRefresh={refresh}
        data={restaurants}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </Styles.Container>
  );
};

export default Restaurants;

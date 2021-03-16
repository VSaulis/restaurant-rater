import React from 'react';
import * as Styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Screens } from 'shared/constant';
import { ListSeparator } from 'shared/components';
import { Spacings } from 'shared/styles';
import { useReviews } from 'features/reviews/hooks';
import { ReviewsListItem } from 'features/reviews/components';

const Reviews = (props) => {
  const { style } = props;
  const navigation = useNavigation();
  const { isRefreshing, isLoading, refresh, reviews, loadMore } = useReviews({
    filter: {},
    sort: {},
  });

  const handleItemPress = (id) => {
    navigation.navigate(Screens.RESTAURANT, { id });
  };

  const renderItem = ({ item }) => (
    <ReviewsListItem onPress={() => handleItemPress(item.id)} review={item} />
  );

  return (
    <Styles.Container style={style}>
      <Styles.List
        contentContainerStyle={Spacings.FULL_PADDING}
        ItemSeparatorComponent={ListSeparator}
        refreshing={isRefreshing || isLoading}
        onRefresh={refresh}
        data={reviews}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </Styles.Container>
  );
};

export default Reviews;

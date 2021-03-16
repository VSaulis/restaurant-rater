import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { useProperties } from 'features/profile/hooks';
import { PropertiesListItem } from 'features/profile/components';

const PropertiesList = (props) => {
  const { style } = props;
  const { isRefreshing, isLoading, refresh, properties, loadMore } = useProperties({
    filter: {},
    sort: {},
  });

  const renderItem = ({ item }) => (
    <PropertiesListItem onPress={() => {}} item={item} />
  );

  return (
    <Styles.Container style={style}>
      <Styles.List
        refreshing={isRefreshing || isLoading}
        onRefresh={refresh}
        data={properties}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </Styles.Container>
  );
};

PropertiesList.propTypes = {
  style: ViewPropTypes.style,
};

PropertiesList.defaultProps = {
  style: {},
};

export default PropertiesList;

import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { RestaurantTypes } from 'features/restaurants/utils';
import { Spacings, Typography } from 'shared/styles';
import { Badge, Rating } from 'shared/components';

const mockUrl = 'http://viahansadmc.com/userfiles/images/trinity.jpg';

const RestaurantsListItem = (props) => {
  const { onPress, restaurant } = props;

  return (
    <Styles.Container onPress={onPress}>
      <Styles.Image source={{ uri: mockUrl }}>
        <Badge label="Fast food" />
      </Styles.Image>
      <Styles.Details>
        <Styles.RightSide>
          <Typography.Title>{restaurant.title}</Typography.Title>
          <Typography.Caption>{restaurant.created}</Typography.Caption>
        </Styles.RightSide>
        <Styles.LeftSide>
          <Rating style={Spacings.BOTTOM_SPACING.XS} value={restaurant.averageRating} />
          <Typography.Caption
            style={Spacings.RIGHT_SPACING.XS}
          >{`${restaurant.reviewsCount} reviews`}</Typography.Caption>
        </Styles.LeftSide>
      </Styles.Details>
    </Styles.Container>
  );
};

RestaurantsListItem.propTypes = {
  style: ViewPropTypes.style,
  onPress: PropTypes.func.isRequired,
  restaurant: RestaurantTypes.RestaurantsListItemType.isRequired,
};

RestaurantsListItem.defaultProps = {
  style: {},
};

export default RestaurantsListItem;

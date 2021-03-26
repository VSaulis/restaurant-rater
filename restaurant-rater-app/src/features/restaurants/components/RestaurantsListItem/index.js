import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { RestaurantPropTypes } from 'features/restaurants/utils';
import { Spacings, Typography } from 'shared/styles';
import { Rating } from 'shared/components';

const RestaurantsListItem = (props) => {
  const { onPress, restaurant } = props;

  return (
    <Styles.Container onPress={onPress}>
      <Styles.LeftSide>
        <Typography.Title>{restaurant.title}</Typography.Title>
        <Typography.Caption>{restaurant.created}</Typography.Caption>
      </Styles.LeftSide>
      <Styles.RightSide>
        <Rating style={Spacings.BOTTOM_SPACING.XS} value={restaurant.averageRating} />
        <Typography.Caption style={Spacings.RIGHT_SPACING.XS}>
          {`${restaurant.reviewsCount} reviews`}
        </Typography.Caption>
      </Styles.RightSide>
    </Styles.Container>
  );
};

RestaurantsListItem.propTypes = {
  style: ViewPropTypes.style,
  onPress: PropTypes.func.isRequired,
  restaurant: RestaurantPropTypes.RestaurantsListItemType.isRequired,
};

RestaurantsListItem.defaultProps = {
  style: {},
};

export default RestaurantsListItem;

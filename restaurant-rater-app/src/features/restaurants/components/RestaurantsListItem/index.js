import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { RestaurantTypes } from 'features/restaurants/utils';
import { Colors, Spacings, Typography } from 'shared/styles';
import { Rating } from 'shared/components';

const mockUrl = 'http://viahansadmc.com/userfiles/images/trinity.jpg';

const RestaurantsListItem = (props) => {
  const { onPress, restaurant } = props;

  return (
    <Styles.Container onPress={onPress}>
      <Styles.RatingContainer>
        <Rating style={Spacings.RIGHT_SPACING.XS} value={restaurant.averageRating} />
        <Typography.Caption color={Colors.WHITE}>
          {`${restaurant.averageRating} (${restaurant.reviewsCount})`}
        </Typography.Caption>
      </Styles.RatingContainer>
      <Styles.Image style={Spacings.BOTTOM_SPACING.S} source={{ uri: mockUrl }} />
      <Typography.Subheader style={Spacings.BOTTOM_SPACING.XS}>
        {restaurant.title}
      </Typography.Subheader>
      <Typography.Caption style={Spacings.BOTTOM_SPACING.S} color={Colors.TEXT_SECONDARY}>
        {restaurant.created}
      </Typography.Caption>
      <Typography.Paragraph numberOfLines={3} color={Colors.TEXT_SECONDARY}>
        {restaurant.description}
      </Typography.Paragraph>
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

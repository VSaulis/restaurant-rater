import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { RestaurantTypes } from 'features/restaurants/utils';
import { Colors, Spacings, Typography } from 'shared/styles';
import { Avatar, Rating } from 'shared/components';

const mockUrl = 'http://viahansadmc.com/userfiles/images/trinity.jpg';

const ReviewsListItem = (props) => {
  const { review } = props;

  return (
    <Styles.Container>
      <Avatar style={Spacings.RIGHT_SPACING.S} size={40} uri={mockUrl} />
      <Styles.Content>
        <Styles.Header>
          <Styles.Content style={Spacings.RIGHT_SPACING.XS}>
            <Typography.Subtitle>{`${review.createdBy.firstName} ${review.createdBy.lastName}`}</Typography.Subtitle>
            <Typography.Caption color={Colors.TEXT_SECONDARY}>{review.visited}</Typography.Caption>
          </Styles.Content>
          <Rating value={review.rating} />
        </Styles.Header>
        <Typography.Paragraph color={Colors.TEXT_SECONDARY}>
          {review.comment}
        </Typography.Paragraph>
      </Styles.Content>
    </Styles.Container>
  );
};

ReviewsListItem.propTypes = {
  style: ViewPropTypes.style,
  review: RestaurantTypes.ReviewsListItemType.isRequired,
};

ReviewsListItem.defaultProps = {
  style: {},
};

export default ReviewsListItem;

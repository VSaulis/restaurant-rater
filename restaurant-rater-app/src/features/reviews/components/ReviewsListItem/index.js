import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { Colors, Spacings, Typography } from 'shared/styles';
import { Avatar, Rating } from 'shared/components';
import { ReviewPropTypes } from 'features/reviews/utils';

const ReviewsListItem = (props) => {
  const { review } = props;
  const initials = `${review.createdBy.firstName[0]}${review.createdBy.lastName[0]}`;

  return (
    <Styles.Container>
      <Avatar style={Spacings.RIGHT_SPACING.S} size={40} initials={initials} />
      <Styles.Content>
        <Styles.Header>
          <Styles.Content style={Spacings.RIGHT_SPACING.XS}>
            <Typography.Subtitle>
              {`${review.createdBy.firstName} ${review.createdBy.lastName}`}
            </Typography.Subtitle>
            <Typography.Caption color={Colors.TEXT_SECONDARY}>
              {review.visited}
            </Typography.Caption>
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
  review: ReviewPropTypes.ReviewsListItemType.isRequired,
};

ReviewsListItem.defaultProps = {
  style: {},
};

export default ReviewsListItem;

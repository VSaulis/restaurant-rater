import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { RestaurantTypes } from 'features/restaurants/utils';
import ReviewsListItem from '../ReviewsListItem';

const Reviews = (props) => {
  const { reviews } = props;

  return (
    <Styles.Container>
      {reviews.map((review, index) => (
        <Styles.ReviewItemContainer last={index === reviews.length - 1} key={review.id}>
          <ReviewsListItem review={review} />
        </Styles.ReviewItemContainer>
      ))}
    </Styles.Container>
  );
};

Reviews.propTypes = {
  style: ViewPropTypes.style,
  reviews: PropTypes.arrayOf(RestaurantTypes.ReviewsListItem).isRequired,
};

Reviews.defaultProps = {
  style: {},
};

export default Reviews;

import PropTypes from 'prop-types';
import { BaseModelType } from 'shared/utils/sharedTypes';

export const RestaurantsListItemType = PropTypes.shape({
  ...BaseModelType,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired,
});

export const RestaurantType = PropTypes.shape({
  ...BaseModelType,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired,
  highestRating: PropTypes.number.isRequired,
  lowestRating: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired,
});

export const ReviewsListItemType = PropTypes.shape({
  ...BaseModelType,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  visited: PropTypes.string.isRequired,
  createdBy: PropTypes.object.isRequired,
});

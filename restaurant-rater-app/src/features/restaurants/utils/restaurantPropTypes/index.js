import PropTypes from 'prop-types';

export const RestaurantsListItemType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired,
});

export const RestaurantType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired,
  highestRating: PropTypes.number.isRequired,
  lowestRating: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired,
});

export const ReviewsListItemType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  visited: PropTypes.string.isRequired,
  createdBy: PropTypes.object.isRequired,
});

export const RestaurantFormData = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

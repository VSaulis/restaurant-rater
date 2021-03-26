import PropTypes from 'prop-types';

export const ReviewsListItemType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  visited: PropTypes.string.isRequired,
  createdBy: PropTypes.object.isRequired,
});

export const ReviewFormData = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
});

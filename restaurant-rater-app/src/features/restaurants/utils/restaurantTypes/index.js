import PropTypes from 'prop-types';

export const RestaurantsListItemType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
});

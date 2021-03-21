import PropTypes from 'prop-types';

export const CategoriesListItemType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string,
  restaurantsCount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export const CategoryFormData = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

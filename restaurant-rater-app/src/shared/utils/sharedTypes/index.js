import PropTypes from 'prop-types';

export const HorizontalSliderItemType = PropTypes.shape({
  id: PropTypes.number.isRequired,
});

export const BaseModelType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string,
});

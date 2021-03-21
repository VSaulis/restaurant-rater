import PropTypes from 'prop-types';

export const SlideType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
});

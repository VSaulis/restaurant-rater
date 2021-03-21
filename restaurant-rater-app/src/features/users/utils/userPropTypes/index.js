import PropTypes from 'prop-types';

export const UsersListItemType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const UserFormData = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

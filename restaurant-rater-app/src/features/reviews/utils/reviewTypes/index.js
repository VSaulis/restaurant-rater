import PropTypes from 'prop-types';
import { BaseModelType } from 'shared/utils/sharedTypes';

export const ReviewsListItemType = PropTypes.shape({
  ...BaseModelType,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  visited: PropTypes.string.isRequired,
  createdBy: PropTypes.object.isRequired,
});

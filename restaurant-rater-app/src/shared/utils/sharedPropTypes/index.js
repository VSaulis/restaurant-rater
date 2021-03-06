import PropTypes from 'prop-types';

export const HorizontalSliderItemType = PropTypes.shape({
  id: PropTypes.number.isRequired,
});

export const NumberOrStringType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);

export const BaseModelType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string,
});

export const OptionType = PropTypes.shape({
  value: NumberOrStringType.isRequired,
  label: PropTypes.string.isRequired,
});

export const BottomSheetOptionType = PropTypes.shape({
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
});

export const ErrorType = PropTypes.shape({
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

export const HeaderActionType = PropTypes.shape({
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
});

import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const Button = (props) => {
  const { label, onPress, disabled, loading, outline, nude } = props;

  return (
    <Styles.Container
      outline={outline}
      nude={nude}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <Styles.Label outline={outline} nude={nude}>
        {label}
      </Styles.Label>
    </Styles.Container>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  outline: PropTypes.bool,
  nude: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  onPress: () => {},
  outline: false,
  nude: false,
  loading: false,
};

export default Button;

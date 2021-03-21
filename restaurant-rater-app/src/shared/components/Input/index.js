import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';
import { Colors } from 'shared/styles';
import { ViewPropTypes } from 'react-native';
import { SharedPropTypes } from 'shared/utils';

const Input = (props) => {
  const {
    onBlur,
    error,
    onChange,
    name,
    value,
    disabled,
    placeholder,
    secureTextEntry,
    label,
    style,
  } = props;

  const handleTextChange = (text) => {
    onChange({ name, value: text });
  };

  const handleBlur = () => {
    onBlur({ name });
  };

  return (
    <Styles.Container style={style}>
      <Styles.Label>{label}</Styles.Label>
      <Styles.Input
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={Colors.PLACEHOLDER}
        disabled={disabled}
        value={value}
        error={error}
        onBlur={handleBlur}
        onChangeText={handleTextChange}
      />
      {error && <Styles.Error>{error.message}</Styles.Error>}
    </Styles.Container>
  );
};

Input.propTypes = {
  style: ViewPropTypes.style,
  value: PropTypes.PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  error: SharedPropTypes.ErrorType,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

Input.defaultProps = {
  value: null,
  secureTextEntry: false,
  onBlur: () => {},
  error: null,
  onChange: () => {},
  name: null,
  placeholder: null,
  style: null,
  disabled: false,
};

export default Input;

import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';
import { Colors } from 'shared/styles';

const Input = (props) => {
  const { onBlur, onChange, name, value, disabled, placeholder, secureTextEntry, label } = props;

  const handleTextChange = (text) => {
    onChange({ name, value: text });
  };

  const handleBlur = () => {
    onBlur({ name });
  };

  return (
    <Styles.Container>
      <Styles.Label>{label}</Styles.Label>
      <Styles.Input
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={Colors.PLACEHOLDER}
        disabled={disabled}
        value={value}
        onBlur={handleBlur}
        onChangeText={handleTextChange}
      />
    </Styles.Container>
  );
};

Input.propTypes = {
  value: PropTypes.PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

Input.defaultProps = {
  value: null,
  secureTextEntry: false,
  onBlur: () => {},
  onChange: () => {},
  name: null,
  placeholder: null,
  disabled: false,
};

export default Input;

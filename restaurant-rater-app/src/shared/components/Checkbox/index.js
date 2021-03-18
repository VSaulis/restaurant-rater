import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { Typography } from 'shared/styles';
import { ViewPropTypes } from 'react-native';

const Checkbox = (props) => {
  const { style, checked, label, onChange } = props;

  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <Styles.Container onPress={handleChange} style={style}>
      <Styles.CheckContainer checked={checked} />
      <Typography.Title>{label}</Typography.Title>
    </Styles.Container>
  );
};

Checkbox.propTypes = {
  style: ViewPropTypes.style,
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  checked: false,
  style: null,
};

export default Checkbox;

import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import Checkbox from 'shared/components/Checkbox';
import { SharedPropTypes } from 'shared/utils';
import _ from 'lodash';
import { Typography } from 'shared/styles';

const ExpandedSelect = (props) => {
  const { style, options, onChange, name, value, label } = props;

  const handleChange = (option) => {
    onChange({ name, value: _.xor(value, [option.value]) });
  };

  return (
    <Styles.Container style={style}>
      <Typography.Title>{label}</Typography.Title>
      {options.map((option, index) => (
        <Checkbox
          checked={value.includes(option.value)}
          key={index}
          label={option.label}
          onChange={() => handleChange(option)}
        />
      ))}
    </Styles.Container>
  );
};

ExpandedSelect.propTypes = {
  style: ViewPropTypes.style,
  options: PropTypes.arrayOf(SharedPropTypes.OptionType).isRequired,
  value: PropTypes.arrayOf(SharedPropTypes.NumberOrStringType),
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

ExpandedSelect.defaultProps = {
  value: [],
  style: null,
};

export default ExpandedSelect;

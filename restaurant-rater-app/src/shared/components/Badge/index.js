import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { Typography } from 'shared/styles';
import { SharedPropTypes } from 'shared/utils';

const Badge = (props) => {
  const { label, style, onPress } = props;

  return (
    <Styles.Container onPress={onPress} disabled={!onPress} style={style}>
      <Typography.Badge>{label}</Typography.Badge>
    </Styles.Container>
  );
};

Badge.propTypes = {
  label: SharedPropTypes.NumberOrStringType.isRequired,
  onPress: PropTypes.func,
};

export default Badge;

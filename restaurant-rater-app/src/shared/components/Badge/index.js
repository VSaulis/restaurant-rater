import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { Typography } from 'shared/styles';

const Badge = (props) => {
  const { label, style, onPress } = props;

  return (
    <Styles.Container onPress={onPress} disabled={!onPress} style={style}>
      <Typography.Badge>{label}</Typography.Badge>
    </Styles.Container>
  );
};

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default Badge;

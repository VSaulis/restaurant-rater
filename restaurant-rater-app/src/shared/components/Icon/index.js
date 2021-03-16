import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import { Colors } from 'shared/styles';

const Icon = (props) => {
  const { name, size, color, style } = props;

  return (
    <Styles.Container style={style}>
      <Feather color={color} size={size} name={name} />
    </Styles.Container>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 24,
  color: Colors.TEXT_PRIMARY,
};

export default Icon;

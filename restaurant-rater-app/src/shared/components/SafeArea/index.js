import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';

const SafeArea = (props) => {
  const { children, style } = props;

  return <Styles.Container style={style}>{children}</Styles.Container>;
};

SafeArea.propTypes = {
  style: ViewPropTypes.style,
  children: PropTypes.node.isRequired,
};

SafeArea.defaultProps = {
  style: null,
};

export default SafeArea;

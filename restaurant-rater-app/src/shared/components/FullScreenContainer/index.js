import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';

const FullScreenContainer = (props) => {
  const { children } = props;

  return <Styles.Container>{children}</Styles.Container>;
};

FullScreenContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FullScreenContainer;

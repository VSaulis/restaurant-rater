import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import SafeArea from '../SafeArea';

const ScreenContainer = (props) => {
  const { children } = props;
  return (
    <Styles.Container>
      <SafeArea>{children}</SafeArea>
    </Styles.Container>
  );
};

ScreenContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScreenContainer;

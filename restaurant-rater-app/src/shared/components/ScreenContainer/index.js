import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';

const ScreenContainer = (props) => {
  const { children } = props;
  return (
    <Styles.Container>
      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  );
};

ScreenContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScreenContainer;

import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';

const SafeArea = (props) => {
  const { children } = props;
  return (
    <Styles.Container>
      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  );
};

SafeArea.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SafeArea;

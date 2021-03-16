import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';

const Avatar = (props) => {
  const { uri, size, style } = props;

  return (
    <Styles.Container style={style}>
      <Styles.Image size={size} source={{ uri }} />
    </Styles.Container>
  );
};

Avatar.propTypes = {
  uri: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Avatar.defaultProps = {
  size: 80,
};

export default Avatar;

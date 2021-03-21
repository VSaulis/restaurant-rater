import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { Colors } from 'shared/styles';

const Avatar = (props) => {
  const { initials, size, style } = props;

  return (
    <Styles.Container size={size} style={style}>
      <Styles.Content size={size}>
        <Styles.Initials color={Colors.WHITE}>{initials}</Styles.Initials>
      </Styles.Content>
    </Styles.Container>
  );
};

Avatar.propTypes = {
  initials: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Avatar.defaultProps = {
  size: 40,
};

export default Avatar;

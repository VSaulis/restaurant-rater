import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { Colors, Sizes } from 'shared/styles';

const IconButton = (props) => {
  const { onPress, icon, size, iconColor } = props;

  return (
    <Styles.Container size={size} onPress={onPress}>
      <Icon color={iconColor} size={size - Sizes.L} name={icon} />
    </Styles.Container>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  iconColor: PropTypes.string,
  onPress: PropTypes.func,
};

IconButton.defaultProps = {
  onPress: () => {},
  size: 40,
  iconColor: Colors.WHITE,
};

export default IconButton;

import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { Colors } from 'shared/styles';
import { ViewPropTypes } from 'react-native';

const IconButton = (props) => {
  const { onPress, icon, size, iconColor, style } = props;

  return (
    <Styles.Container style={style} size={size} onPress={onPress}>
      <Icon size={20} color={iconColor} name={icon} />
    </Styles.Container>
  );
};

IconButton.propTypes = {
  style: ViewPropTypes.style,
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  iconColor: PropTypes.string,
  onPress: PropTypes.func,
};

IconButton.defaultProps = {
  onPress: () => {},
  style: null,
  size: 46,
  iconColor: Colors.NEW_GREY,
};

export default IconButton;

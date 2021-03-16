import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { Colors, Icons, Spacings } from 'shared/styles';
import { ViewPropTypes } from 'react-native';
import { Icon } from 'shared/components';

const Option = (props) => {
  const { title, onPress, icon } = props;

  return (
    <Styles.Container onPress={onPress}>
      <Icon color={Colors.PRIMARY} style={Spacings.RIGHT_SPACING.S} name={icon} />
      <Styles.Title style={Spacings.RIGHT_SPACING.S}>{title}</Styles.Title>
      <Icon color={Colors.GREY} name={Icons.ARROW_RIGHT} />
    </Styles.Container>
  );
};

Option.propTypes = {
  style: ViewPropTypes.style,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Option.defaultProps = {
  style: {},
};

export default Option;

import React from 'react';
import * as Styles from './styles';
import { Colors, Spacings, Typography } from 'shared/styles';
import { ViewPropTypes } from 'react-native';
import Icon from 'shared/components/Icon';
import { SharedPropTypes } from 'shared/utils';

const BottomSheetOption = (props) => {
  const { style, option } = props;

  return (
    <Styles.Container onPress={option.onPress} style={style}>
      <Icon style={Spacings.RIGHT_SPACING.M} color={Colors.NEW_LIGHT_GREY} name={option.icon} />
      <Typography.Title>{option.label}</Typography.Title>
    </Styles.Container>
  );
};

BottomSheetOption.propTypes = {
  style: ViewPropTypes.style,
  option: SharedPropTypes.BottomSheetOptionType.isRequired,
};

BottomSheetOption.defaultProps = {
  style: null,
};

export default BottomSheetOption;

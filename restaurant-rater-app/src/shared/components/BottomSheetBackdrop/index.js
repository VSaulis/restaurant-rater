import React, { useMemo } from 'react';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { Colors } from 'shared/styles';
import hexToRgba from 'hex-to-rgba';

const BottomSheetBackdrop = (props) => {
  const { animatedIndex, style } = props;

  const animatedOpacity = useMemo(
    () =>
      interpolate(animatedIndex, {
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: Extrapolate.CLAMP,
      }),
    [animatedIndex]
  );

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: hexToRgba(Colors.BLACK, 0.2),
        opacity: animatedOpacity,
      },
    ],
    [style, animatedOpacity]
  );

  return <Animated.View style={containerStyle} />;
};

BottomSheetBackdrop.propTypes = {
  animatedIndex: PropTypes.object.isRequired,
  style: ViewPropTypes.style,
};

export default BottomSheetBackdrop;

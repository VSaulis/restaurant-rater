import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { AirbnbRating } from 'react-native-ratings';

const Rating = (props) => {
  const { style, value, ratingCount, imageSize, readonly } = props;

  return (
    <Styles.Container style={style}>
      <AirbnbRating
        showRating={false}
        defaultRating={value}
        size={imageSize}
        count={ratingCount}
        isDisabled={readonly}
      />
    </Styles.Container>
  );
};

Rating.propTypes = {
  style: ViewPropTypes.style,
  ratingCount: PropTypes.number,
  imageSize: PropTypes.number,
  value: PropTypes.number,
  readonly: PropTypes.bool,
};

Rating.defaultProps = {
  style: {},
  ratingCount: 5,
  imageSize: 12,
  readonly: true,
  value: 0,
};

export default Rating;

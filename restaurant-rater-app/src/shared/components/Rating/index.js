import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { AirbnbRating } from 'react-native-ratings';
import { Colors } from 'shared/styles';
import { SharedPropTypes } from 'shared/utils';

const Rating = (props) => {
  const {
    style,
    value,
    ratingCount,
    imageSize,
    readonly,
    error,
    label,
    onChange,
    onBlur,
  } = props;

  const handleOnChange = (rating) => {
    onBlur();
    onChange(rating);
  };

  return (
    <Styles.Container style={style}>
      {label && <Styles.Label>{label}</Styles.Label>}
      <AirbnbRating
        onFinishRating={handleOnChange}
        starStyle={Styles.StarContainer}
        selectedColor={Colors.PRIMARY}
        unSelectedColor={Colors.LIGHT_GREY_2}
        showRating={false}
        defaultRating={value}
        size={imageSize}
        count={ratingCount}
        isDisabled={readonly}
      />
      {error && <Styles.Error>{error.message}</Styles.Error>}
    </Styles.Container>
  );
};

Rating.propTypes = {
  style: ViewPropTypes.style,
  ratingCount: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  imageSize: PropTypes.number,
  value: PropTypes.number,
  readonly: PropTypes.bool,
  error: SharedPropTypes.ErrorType,
};

Rating.defaultProps = {
  style: {},
  error: null,
  ratingCount: 5,
  onChange: () => {},
  onBlur: () => {},
  label: null,
  imageSize: 12,
  readonly: true,
  value: 0,
};

export default Rating;

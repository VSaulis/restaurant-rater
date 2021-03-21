import React, { forwardRef } from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { ViewPropTypes, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Colors } from 'shared/styles';

const ScreenWidth = Dimensions.get('window').width;

const Slider = forwardRef((props, ref) => {
  const { style, slides, renderSlide, loop, onChange, currentSlideIndex } = props;

  return (
    <Styles.Container style={style}>
      <Carousel
        ref={ref}
        sliderWidth={ScreenWidth}
        onSnapToItem={onChange}
        itemWidth={ScreenWidth}
        loop={loop}
        renderItem={renderSlide}
        data={slides}
      />
      <Pagination
        inactiveDotColor={Colors.NEW_GREY}
        dotColor={Colors.NEW_PRIMARY}
        dotsLength={slides.length}
        activeDotIndex={currentSlideIndex}
      />
    </Styles.Container>
  );
});

Slider.propTypes = {
  renderSlide: PropTypes.func.isRequired,
  currentSlideIndex: PropTypes.number.isRequired,
  slides: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  loop: PropTypes.bool,
  style: ViewPropTypes.style,
};

Slider.defaultProps = {
  style: null,
  onChange: () => {},
  loop: false,
};

export default Slider;

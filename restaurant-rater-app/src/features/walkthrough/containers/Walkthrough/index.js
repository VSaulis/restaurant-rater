import React, { useState, useRef } from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { Button, Slider } from 'shared/components';
import { Slide } from 'features/walkthrough/components';
import { Slides } from 'features/walkthrough/constants';
import { useWalkthrough } from 'features/walkthrough/hooks';

const Walkthrough = (props) => {
  const { style } = props;
  const ref = useRef(null);
  const { completeWalkthrough } = useWalkthrough();
  const [slideIndex, setSlideIndex] = useState(0);
  const isLastSlide = slideIndex === Slides.length - 1;

  const onButtonPress = () => {
    if (!isLastSlide && ref.current) {
      ref.current.snapToNext();
      return;
    }

    completeWalkthrough();
  };

  return (
    <Styles.Container style={style}>
      <Styles.SliderContainer>
        <Slider
          ref={ref}
          onChange={setSlideIndex}
          currentSlideIndex={slideIndex}
          slides={Slides}
          renderSlide={({ item }) => <Slide slide={item} />}
        />
      </Styles.SliderContainer>
      <Styles.Footer>
        <Button onPress={onButtonPress} label={isLastSlide ? 'Get started' : 'Next'} />
      </Styles.Footer>
    </Styles.Container>
  );
};

Walkthrough.propTypes = {
  style: ViewPropTypes.style,
};

Walkthrough.defaultProps = {
  style: {},
};

export default Walkthrough;

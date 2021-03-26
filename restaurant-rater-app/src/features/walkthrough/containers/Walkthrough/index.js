import React, { useState, useRef } from 'react';
import { Containers } from 'shared/styles';
import { Button, Slider } from 'shared/components';
import { Slide } from 'features/walkthrough/components';
import { Slides } from 'features/walkthrough/constants';
import { useWalkthrough } from 'features/walkthrough/hooks';

const Walkthrough = () => {
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
    <Containers.FilledContainer>
      <Containers.FilledContainer>
        <Slider
          ref={ref}
          onChange={setSlideIndex}
          currentSlideIndex={slideIndex}
          slides={Slides}
          renderSlide={({ item }) => (
            <Slide description={item.description} image={item.image} title={item.title} />
          )}
        />
      </Containers.FilledContainer>
      <Containers.Footer>
        <Button onPress={onButtonPress} label={isLastSlide ? 'Get started' : 'Next'} />
      </Containers.Footer>
    </Containers.FilledContainer>
  );
};

export default Walkthrough;

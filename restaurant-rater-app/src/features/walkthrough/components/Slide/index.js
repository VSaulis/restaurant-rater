import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { Colors, Spacings, Typography } from 'shared/styles';
import PropTypes from 'prop-types';

const Slide = (props) => {
  const { style, slide } = props;

  return (
    <Styles.Container style={style}>
      <Styles.ImageContainer>
        <Styles.Image source={slide.image} />
      </Styles.ImageContainer>
      <Styles.Footer>
        <Typography.Heading center style={Spacings.BOTTOM_SPACING.L}>
          {slide.title}
        </Typography.Heading>
        <Typography.Paragraph color={Colors.NEW_GREY} center>
          {slide.description}
        </Typography.Paragraph>
      </Styles.Footer>
    </Styles.Container>
  );
};

Slide.propTypes = {
  style: ViewPropTypes.style,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
};

Slide.defaultProps = {
  style: {},
};

export default Slide;

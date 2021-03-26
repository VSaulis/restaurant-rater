import React from 'react';
import * as Styles from './styles';
import { Colors, Spacings, Typography } from 'shared/styles';
import PropTypes from 'prop-types';

const Slide = (props) => {
  const { title, description, image } = props;

  return (
    <Styles.Container>
      <Styles.ImageContainer>
        <Styles.Image source={image} />
      </Styles.ImageContainer>
      <Styles.Footer>
        <Typography.Heading center style={Spacings.BOTTOM_SPACING.L}>
          {title}
        </Typography.Heading>
        <Typography.Paragraph color={Colors.NEW_GREY} center>
          {description}
        </Typography.Paragraph>
      </Styles.Footer>
    </Styles.Container>
  );
};

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
};

export default Slide;

import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { Colors, Spacings, Typography } from 'shared/styles';

const Banner = (props) => {
  const { style, title, description, image } = props;

  return (
    <Styles.Container style={style}>
      <Styles.Details>
        <Typography.Heading3 style={Spacings.BOTTOM_SPACING.XS} color={Colors.WHITE}>
          {title}
        </Typography.Heading3>
        <Typography.Paragraph color={Colors.WHITE}>{description}</Typography.Paragraph>
      </Styles.Details>
      <Styles.Image source={image} />
    </Styles.Container>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
};

export default Banner;

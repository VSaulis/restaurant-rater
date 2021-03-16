import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { Spacings, Typography } from 'shared/styles';

const PrimaryHeader = (props) => {
  const { title } = props;

  return (
    <Styles.Container>
      <Styles.SafeArea>
        <Styles.Content>
          <Typography.Paragraph style={Spacings.BOTTOM_SPACING.XS}>{title}</Typography.Paragraph>
        </Styles.Content>
      </Styles.SafeArea>
    </Styles.Container>
  );
};

PrimaryHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PrimaryHeader;
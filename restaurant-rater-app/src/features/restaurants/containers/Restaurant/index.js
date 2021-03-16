import React from 'react';
import * as Styles from './styles';
import { useRestaurant } from 'features/restaurants/hooks';
import { Colors, Spacings, Typography } from 'shared/styles';

const mockUrl = 'http://viahansadmc.com/userfiles/images/trinity.jpg';

const Restaurant = (props) => {
  const { style, id } = props;
  const { restaurant, isLoading } = useRestaurant({ id });

  return (
    <Styles.Container style={style}>
      <Styles.ImageContainer source={{ uri: mockUrl }} />
      <Styles.Details>
        <Typography.Subheader style={Spacings.BOTTOM_SPACING.XS}>
          {restaurant.title}
        </Typography.Subheader>
        <Typography.Caption style={Spacings.BOTTOM_SPACING.S} color={Colors.TEXT_SECONDARY}>
          {restaurant.created}
        </Typography.Caption>
        <Typography.Paragraph style={Spacings.BOTTOM_SPACING.L} color={Colors.TEXT_SECONDARY}>
          {restaurant.description}
        </Typography.Paragraph>
        <Typography.Subheader style={Spacings.BOTTOM_SPACING.XS}>Last reviews</Typography.Subheader>
      </Styles.Details>
    </Styles.Container>
  );
};

export default Restaurant;

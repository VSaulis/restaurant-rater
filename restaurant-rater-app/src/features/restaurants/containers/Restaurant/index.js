import React from 'react';
import * as Styles from './styles';
import { useRestaurant } from 'features/restaurants/hooks';
import { Colors, Spacings, Typography } from 'shared/styles';
import { Reviews } from 'features/restaurants/components';
import { usePermissions } from 'features/auth/hooks';
import { Permissions } from 'shared/constant';
import { Button } from 'shared/components';

const mockUrl = 'http://viahansadmc.com/userfiles/images/trinity.jpg';

const Restaurant = (props) => {
  const { style, id } = props;
  const { hasPermission } = usePermissions();
  const { restaurant, isLoading } = useRestaurant({ id });

  if (isLoading || !restaurant) {
    return <Styles.Container />;
  }

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
        {hasPermission(Permissions.Reviews.CREATE) && (
          <Button style={Spacings.BOTTOM_SPACING.L} label="Add review" />
        )}
        <Typography.Subheader style={Spacings.BOTTOM_SPACING.L}>Last reviews</Typography.Subheader>
        <Reviews reviews={restaurant.reviews} />
      </Styles.Details>
    </Styles.Container>
  );
};

export default Restaurant;

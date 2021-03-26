import React from 'react';
import { useRestaurant } from 'features/restaurants/hooks';
import { Containers, Spacings, Typography } from 'shared/styles';
import { usePermissions } from 'features/auth/hooks';
import { Permissions, Screens } from 'shared/constant';
import { Button, Rating } from 'shared/components';
import { useNavigation } from '@react-navigation/native';

const Restaurant = (props) => {
  const { id } = props;
  const { hasPermission } = usePermissions();
  const { navigate } = useNavigation();
  const { restaurant, isLoading } = useRestaurant({ id });

  if (isLoading || !restaurant) {
    return <></>;
  }

  const showEdit = hasPermission(Permissions.Reviews.Edit) && !!restaurant.userReview;
  const showAdd = hasPermission(Permissions.Reviews.Create) && !restaurant.userReview;

  return (
    <Containers.ScrollView style={Spacings.HORIZONTAL_PADDING.L}>
      <Rating
        style={Spacings.BOTTOM_SPACING.XS}
        imageSize={16}
        value={restaurant.averageRating}
      />
      <Typography.Caption
        style={Spacings.BOTTOM_SPACING.S}
      >{`(${restaurant.reviewsCount} reviews)`}</Typography.Caption>
      <Typography.Paragraph style={Spacings.BOTTOM_SPACING.L}>
        {restaurant.description}
      </Typography.Paragraph>
      {showAdd && (
        <Button
          onPress={() => navigate(Screens.REVIEW_ADD, { restaurantId: restaurant.id })}
          style={Spacings.BOTTOM_SPACING.L}
          label="Add review"
        />
      )}
      {showEdit && (
        <Button
          onPress={() => navigate(Screens.REVIEW_EDIT, { id: restaurant.userReview.id })}
          style={Spacings.BOTTOM_SPACING.L}
          label="Edit review"
        />
      )}
      <Typography.Subheader style={Spacings.BOTTOM_SPACING.L}>
        Last reviews
      </Typography.Subheader>
    </Containers.ScrollView>
  );
};

export default Restaurant;

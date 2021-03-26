import React from 'react';
import * as Styles from './styles';
import { Spacings, Typography, Containers } from 'shared/styles';
import { useProfileDelete } from 'features/profile/hooks';
import { Button } from 'shared/components';

const ProfileDelete = () => {
  const { deleteProfile, isDeleting } = useProfileDelete();

  return (
    <Styles.Container>
      <Styles.Content>
        <Typography.Heading style={Spacings.BOTTOM_SPACING.L}>
          Delete profile
        </Typography.Heading>
        <Typography.Paragraph>
          Are you sure that you want to your profile?
        </Typography.Paragraph>
      </Styles.Content>
      <Containers.Footer>
        <Button onPress={deleteProfile} loading={isDeleting} label="Delete profile" />
      </Containers.Footer>
    </Styles.Container>
  );
};

export default ProfileDelete;

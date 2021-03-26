import React from 'react';
import { Typography, Containers, Spacings } from 'shared/styles';
import { useProfileDelete } from 'features/profile/hooks';
import { Button } from 'shared/components';

const ProfileDelete = () => {
  const { deleteProfile, isDeleting } = useProfileDelete();

  return (
    <Containers.FilledContainer>
      <Containers.FilledContainer style={Spacings.HORIZONTAL_PADDING.L}>
        <Typography.Paragraph>
          Are you sure that you want to your profile?
        </Typography.Paragraph>
      </Containers.FilledContainer>
      <Containers.Footer>
        <Button onPress={deleteProfile} loading={isDeleting} label="Delete profile" />
      </Containers.Footer>
    </Containers.FilledContainer>
  );
};

export default ProfileDelete;

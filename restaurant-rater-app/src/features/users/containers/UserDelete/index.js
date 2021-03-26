import React from 'react';
import * as Styles from './styles';
import { Spacings, Typography, Containers } from 'shared/styles';
import { useUserDelete } from 'features/users/hooks';
import PropTypes from 'prop-types';
import { Button } from 'shared/components';

const UserDelete = (props) => {
  const { id } = props;
  const { deleteUser, isDeleting } = useUserDelete({ id });

  return (
    <Styles.Container>
      <Styles.Content>
        <Typography.Heading style={Spacings.BOTTOM_SPACING.L}>
          Delete user
        </Typography.Heading>
        <Typography.Paragraph>
          Are you sure that you want to delete this user?
        </Typography.Paragraph>
      </Styles.Content>
      <Containers.Footer>
        <Button onPress={deleteUser} loading={isDeleting} label="Delete user" />
      </Containers.Footer>
    </Styles.Container>
  );
};

UserDelete.propTypes = {
  id: PropTypes.number.isRequired,
};

export default UserDelete;

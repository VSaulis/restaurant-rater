import React from 'react';
import * as Styles from './styles';
import { Spacings, Typography } from 'shared/styles';
import { useUserEdit } from 'features/users/hooks';
import PropTypes from 'prop-types';
import { UserForm } from 'features/users/components';
import { RefreshControl } from 'react-native';

const UserEdit = (props) => {
  const { id } = props;
  const { editUser, isUpdating, isRefreshing, refresh, user } = useUserEdit({ id });

  return (
    <Styles.Container
      contentContainerStyle={Spacings.FULL_PADDING}
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refresh} />}
    >
      <Typography.Heading style={Spacings.BOTTOM_SPACING.L}>Edit user</Typography.Heading>
      <UserForm isLoading={isUpdating} onSubmit={editUser} formData={user} />
    </Styles.Container>
  );
};

UserEdit.propTypes = {
  id: PropTypes.number.isRequired,
};

export default UserEdit;

import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { UserPropTypes } from 'features/users/utils';
import PropTypes from 'prop-types';
import { BottomSheet, BottomSheetOption } from 'shared/components';
import { Icons } from 'shared/styles';
import { UsersListItem } from 'features/users/components';
import { usePermissions } from 'features/auth/hooks';
import { Permissions, Screens } from 'shared/constant';
import { useNavigation } from '@react-navigation/native';

const UserActions = (props) => {
  const { style, selectedUser, onClose } = props;
  const navigation = useNavigation();
  const { hasPermission } = usePermissions();

  const getOptions = () => {
    const options = [];

    if (hasPermission(Permissions.Users.View)) {
      options.push({
        label: 'View user',
        icon: Icons.ADD,
        onPress: () => {},
      });
    }

    if (hasPermission(Permissions.Users.Edit)) {
      options.push({
        label: 'Edit user',
        icon: Icons.ADD,
        onPress: () => navigation.navigate(Screens.USER_EDIT, { id: selectedUser.id }),
      });
    }

    if (hasPermission(Permissions.Users.Delete)) {
      options.push({
        label: 'Delete user',
        icon: Icons.ADD,
        onPress: () => navigation.navigate(Screens.USER_DELETE, { id: selectedUser.id }),
      });
    }

    return options;
  };

  return (
    <BottomSheet
      style={style}
      snapPoints={[300]}
      visible={!!selectedUser}
      onClose={onClose}
    >
      <Styles.UserContainer>
        {selectedUser && <UsersListItem user={selectedUser} disabled />}
      </Styles.UserContainer>
      {getOptions().map((option, index) => (
        <BottomSheetOption key={index} option={option} />
      ))}
    </BottomSheet>
  );
};

UserActions.propTypes = {
  style: ViewPropTypes.style,
  onClose: PropTypes.func.isRequired,
  selectedUser: UserPropTypes.UsersListItemType,
};

UserActions.defaultProps = {
  style: null,
  selectedUser: null,
};

export default UserActions;

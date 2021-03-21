import React, { useState } from 'react';
import * as Styles from './styles';
import { ListSeparator } from 'shared/components';
import { Spacings, Typography } from 'shared/styles';
import { UsersListItem } from 'features/users/components';
import { useUsers } from 'features/users/hooks';
import UserActions from 'features/users/containers/UserActions';

const Users = (props) => {
  const { style } = props;
  const [selectedUser, setSelectedUser] = useState(null);
  const { isRefreshing, isLoading, refresh, users, loadMore, count } = useUsers();

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <Styles.Container style={style}>
      <Styles.Header>
        <Typography.Heading>Users</Typography.Heading>
        <Typography.Caption>{`${count} results found`}</Typography.Caption>
      </Styles.Header>
      <Styles.List
        contentContainerStyle={Spacings.FULL_PADDING}
        ItemSeparatorComponent={ListSeparator}
        refreshing={isRefreshing || isLoading}
        onRefresh={refresh}
        data={users}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <UsersListItem onPress={() => handleUserSelect(item)} user={item} />
        )}
      />
      <UserActions selectedUser={selectedUser} onClose={() => setSelectedUser(null)} />
    </Styles.Container>
  );
};

export default Users;

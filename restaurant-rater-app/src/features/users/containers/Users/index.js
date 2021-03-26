import React, { useState } from 'react';
import { ListSeparator, SearchInput } from 'shared/components';
import { Spacings, Containers } from 'shared/styles';
import { UsersListItem } from 'features/users/components';
import { useUsers } from 'features/users/hooks';
import UserActions from 'features/users/containers/UserActions';

const Users = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const { isRefreshing, isLoading, refresh, users, loadMore } = useUsers();

  const renderItem = ({ item }) => (
    <UsersListItem onPress={() => setSelectedUser(item)} user={item} />
  );

  return (
    <Containers.FilledContainer>
      <Containers.Header>
        <SearchInput />
      </Containers.Header>
      <Containers.FlatList
        contentContainerStyle={Spacings.HORIZONTAL_PADDING.L}
        ItemSeparatorComponent={ListSeparator}
        refreshing={isRefreshing || isLoading}
        onRefresh={refresh}
        data={users}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <UserActions selectedUser={selectedUser} onClose={() => setSelectedUser(null)} />
    </Containers.FilledContainer>
  );
};

export default Users;

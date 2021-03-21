import React, { useState } from 'react';
import * as Styles from './styles';
import { IconButton, ListSeparator } from 'shared/components';
import { Colors, Icons, Spacings, Typography } from 'shared/styles';
import { CategoriesListItem } from 'features/categories/components';
import { useCategories } from 'features/categories/hooks';
import CategoryActions from 'features/categories/containers/CategoryActions';
import { Permissions, Screens } from 'shared/constant';
import { usePermissions } from 'features/auth/hooks';
import { useNavigation } from '@react-navigation/native';

const Categories = (props) => {
  const { style } = props;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { hasPermission } = usePermissions();
  const { navigate } = useNavigation();
  const { isRefreshing, isLoading, refresh, categories, loadMore, count } = useCategories();

  const createPermitted = hasPermission(Permissions.Categories.Create);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Styles.Container style={style}>
      <Styles.Header>
        <Typography.Heading>Categories</Typography.Heading>
        <Typography.Caption>{`${count} results found`}</Typography.Caption>
        {createPermitted && (
          <IconButton
            onPress={() => navigate(Screens.CATEGORY_ADD)}
            iconColor={Colors.PRIMARY}
            icon={Icons.ADD}
          />
        )}
      </Styles.Header>
      <Styles.List
        contentContainerStyle={Spacings.FULL_PADDING}
        ItemSeparatorComponent={ListSeparator}
        refreshing={isRefreshing || isLoading}
        onRefresh={refresh}
        data={categories}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategoriesListItem onPress={() => handleCategorySelect(item)} category={item} />
        )}
      />
      <CategoryActions
        selectedCategory={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </Styles.Container>
  );
};

export default Categories;

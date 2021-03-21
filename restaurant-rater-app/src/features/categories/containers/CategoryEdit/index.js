import React from 'react';
import * as Styles from './styles';
import { Spacings, Typography } from 'shared/styles';
import { useCategoryEdit } from 'features/categories/hooks';
import PropTypes from 'prop-types';
import { CategoryForm } from 'features/categories/components';
import { RefreshControl } from 'react-native';

const CategoryEdit = (props) => {
  const { id } = props;
  const { editCategory, isUpdating, isRefreshing, refresh, category } = useCategoryEdit({
    id,
  });

  return (
    <Styles.Container
      contentContainerStyle={Spacings.FULL_PADDING}
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refresh} />}
    >
      <Typography.Heading style={Spacings.BOTTOM_SPACING.L}>
        Edit category
      </Typography.Heading>
      <CategoryForm isLoading={isUpdating} onSubmit={editCategory} formData={category} />
    </Styles.Container>
  );
};

CategoryEdit.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CategoryEdit;

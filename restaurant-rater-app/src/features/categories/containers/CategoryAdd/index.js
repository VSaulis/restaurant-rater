import React from 'react';
import * as Styles from './styles';
import { Spacings, Typography } from 'shared/styles';
import { useCategoryAdd } from 'features/categories/hooks';
import { CategoryForm } from 'features/categories/components';

const CategoryAdd = () => {
  const { addCategory, isAdding } = useCategoryAdd();

  return (
    <Styles.Container>
      <Typography.Heading style={Spacings.BOTTOM_SPACING.L}>Add category</Typography.Heading>
      <CategoryForm isLoading={isAdding} onSubmit={addCategory} />
    </Styles.Container>
  );
};

export default CategoryAdd;

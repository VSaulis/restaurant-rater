import React from 'react';
import { CategoryEdit } from 'features/categories/containers';
import { ScreenContainer } from 'shared/components';

const CategoryEditScreen = (props) => {
  const { route } = props;

  return (
    <ScreenContainer>
      <CategoryEdit id={route.params.id} />
    </ScreenContainer>
  );
};

export default CategoryEditScreen;

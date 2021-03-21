import React from 'react';
import { Categories } from 'features/categories/containers';
import { ScreenContainer } from 'shared/components';

const CategoriesScreen = () => {
  return (
    <ScreenContainer>
      <Categories />
    </ScreenContainer>
  );
};

export default CategoriesScreen;

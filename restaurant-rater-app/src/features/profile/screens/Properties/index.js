import React from 'react';
import { PropertiesList } from 'features/profile/containers';
import { ScreenContainer } from 'shared/components';

const PropertiesScreen = () => {
  return (
    <ScreenContainer>
      <PropertiesList />
    </ScreenContainer>
  );
};

export default PropertiesScreen;

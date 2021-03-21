import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { CategoryPropTypes } from 'features/categories/utils';
import PropTypes from 'prop-types';
import { BottomSheet, BottomSheetOption } from 'shared/components';
import { Icons } from 'shared/styles';
import { CategoriesListItem } from 'features/categories/components';
import { usePermissions } from 'features/auth/hooks';
import { Permissions, Screens } from 'shared/constant';
import { useNavigation } from '@react-navigation/native';

const CategoriesActions = (props) => {
  const { style, selectedCategory, onClose } = props;
  const navigation = useNavigation();
  const { hasPermission } = usePermissions();

  const getOptions = () => {
    const options = [];

    if (hasPermission(Permissions.Categories.View)) {
      options.push({
        label: 'View category',
        icon: Icons.ADD,
        onPress: () => {},
      });
    }

    if (hasPermission(Permissions.Categories.Edit)) {
      options.push({
        label: 'Edit category',
        icon: Icons.ADD,
        onPress: () => navigation.navigate(Screens.CATEGORY_EDIT, { id: selectedCategory.id }),
      });
    }

    if (hasPermission(Permissions.Categories.Delete)) {
      options.push({
        label: 'Delete category',
        icon: Icons.ADD,
        onPress: () => {},
      });
    }

    return options;
  };

  return (
    <BottomSheet style={style} snapPoints={[300]} visible={!!selectedCategory} onClose={onClose}>
      <Styles.CategoryContainer>
        {selectedCategory && <CategoriesListItem category={selectedCategory} disabled />}
      </Styles.CategoryContainer>
      {getOptions().map((option, index) => (
        <BottomSheetOption key={index} option={option} />
      ))}
    </BottomSheet>
  );
};

CategoriesActions.propTypes = {
  style: ViewPropTypes.style,
  onClose: PropTypes.func.isRequired,
  selectedCategory: CategoryPropTypes.CategoriesListItemType,
};

CategoriesActions.defaultProps = {
  style: null,
  selectedCategory: null,
};

export default CategoriesActions;

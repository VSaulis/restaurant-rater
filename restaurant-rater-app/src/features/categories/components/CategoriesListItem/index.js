import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { CategoryPropTypes } from 'features/categories/utils';
import PropTypes from 'prop-types';
import { Badge } from 'shared/components';
import { Typography } from 'shared/styles';

const CategoriesListItem = (props) => {
  const { style, onPress, category, disabled } = props;

  return (
    <Styles.Container disabled={disabled} onPress={onPress} style={style}>
      <Styles.Details>
        <Typography.Title>{category.name}</Typography.Title>
        <Typography.Caption>{category.created}</Typography.Caption>
      </Styles.Details>
      <Badge label={category.restaurantsCount} />
    </Styles.Container>
  );
};

CategoriesListItem.propTypes = {
  style: ViewPropTypes.style,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  category: CategoryPropTypes.CategoriesListItemType.isRequired,
};

CategoriesListItem.defaultProps = {
  style: null,
  disabled: false,
  onPress: () => {},
};

export default CategoriesListItem;

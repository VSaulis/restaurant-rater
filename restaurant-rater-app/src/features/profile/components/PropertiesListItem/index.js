import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { ProfileTypes } from 'features/profile/utils';

const PropertiesListItem = (props) => {
  const { item, onPress } = props;

  return (
    <Styles.Container onPress={onPress}>
      <Styles.Title>{item.title}</Styles.Title>
    </Styles.Container>
  );
};

PropertiesListItem.propTypes = {
  style: ViewPropTypes.style,
  onPress: PropTypes.func.isRequired,
  item: ProfileTypes.PropertiesListItemType.isRequired,
};

PropertiesListItem.defaultProps = {
  style: {},
};

export default PropertiesListItem;

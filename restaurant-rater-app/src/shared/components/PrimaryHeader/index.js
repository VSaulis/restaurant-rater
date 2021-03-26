import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { Icons, Spacings, Containers } from 'shared/styles';
import { useNavigation } from '@react-navigation/native';
import IconButton from 'shared/components/IconButton';
import { SharedPropTypes } from 'shared/utils';

const PrimaryHeader = (props) => {
  const { title, action } = props;
  const navigation = useNavigation();

  return (
    <Styles.Container>
      {navigation.canGoBack() && (
        <IconButton
          style={Spacings.BOTTOM_SPACING.S}
          onPress={navigation.goBack}
          icon={Icons.ARROW_LEFT}
        />
      )}
      <Containers.Row>
        <Styles.Title>{title}</Styles.Title>
        {action && <IconButton onPress={action.onPress} icon={action.icon} />}
      </Containers.Row>
    </Styles.Container>
  );
};

PrimaryHeader.propTypes = {
  title: PropTypes.string.isRequired,
  action: SharedPropTypes.HeaderActionType,
};

PrimaryHeader.defaultProps = {
  action: null,
};

export default PrimaryHeader;

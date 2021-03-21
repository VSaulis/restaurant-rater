import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { Typography } from 'shared/styles';
import PropTypes from 'prop-types';
import { Roles } from 'shared/constant';
import { SharedPropTypes } from 'shared/utils';

const RoleSelect = (props) => {
  const { style, onChange, value, label, onBlur, error } = props;

  const handleOnPress = (role) => {
    onBlur();
    onChange(role);
  };

  return (
    <Styles.Container style={style}>
      <Styles.Label>{label}</Styles.Label>
      <Styles.RolesContainer>
        <Styles.RoleContainer
          disabled={value === Roles.RegularUser}
          selected={value === Roles.RegularUser}
          onPress={() => handleOnPress(Roles.RegularUser)}
        >
          <Typography.Caption>Regular user</Typography.Caption>
        </Styles.RoleContainer>
        <Styles.RoleContainer
          disabled={value === Roles.Owner}
          selected={value === Roles.Owner}
          onPress={() => handleOnPress(Roles.Owner)}
        >
          <Typography.Caption>Owner</Typography.Caption>
        </Styles.RoleContainer>
        <Styles.RoleContainer
          disabled={value === Roles.Admin}
          selected={value === Roles.Admin}
          onPress={() => handleOnPress(Roles.Admin)}
        >
          <Typography.Caption>Admin</Typography.Caption>
        </Styles.RoleContainer>
      </Styles.RolesContainer>
      {error && <Styles.Error>{error.message}</Styles.Error>}
    </Styles.Container>
  );
};

RoleSelect.propTypes = {
  style: ViewPropTypes.style,
  error: SharedPropTypes.ErrorType,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

RoleSelect.defaultProps = {
  style: null,
  error: null,
  onBlur: () => {},
};

export default RoleSelect;

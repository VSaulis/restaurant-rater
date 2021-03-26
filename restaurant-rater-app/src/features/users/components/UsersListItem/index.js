import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { UserPropTypes } from 'features/users/utils';
import PropTypes from 'prop-types';
import { Avatar, Badge } from 'shared/components';
import { Spacings, Typography } from 'shared/styles';

const UsersListItem = (props) => {
  const { style, onPress, user, disabled } = props;
  const initials = `${user.firstName[0]}${user.lastName[0]}`;

  return (
    <Styles.Container disabled={disabled} onPress={onPress} style={style}>
      <Avatar style={Spacings.RIGHT_SPACING.S} initials={initials} />
      <Styles.LeftSide>
        <Typography.Title>{`${user.firstName} ${user.lastName}`}</Typography.Title>
        <Typography.Caption>{user.created}</Typography.Caption>
      </Styles.LeftSide>
      <Badge label={user.role} />
    </Styles.Container>
  );
};

UsersListItem.propTypes = {
  style: ViewPropTypes.style,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  user: UserPropTypes.UsersListItemType.isRequired,
};

UsersListItem.defaultProps = {
  style: null,
  disabled: false,
  onPress: () => {},
};

export default UsersListItem;

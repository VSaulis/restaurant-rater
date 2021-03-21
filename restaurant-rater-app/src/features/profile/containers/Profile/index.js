import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { Icons, Spacings } from 'shared/styles';
import { Option } from 'features/profile/components';
import { Avatar } from 'shared/components';
import { useLogout } from 'features/auth/hooks';

const Profile = (props) => {
  const { style } = props;
  const { logout } = useLogout();

  return (
    <Styles.Container contentContainerStyle={Spacings.FULL_PADDING} style={style}>
      <Styles.AvatarContainer style={Spacings.BOTTOM_SPACING.L}>
        <Avatar initials="VS" />
      </Styles.AvatarContainer>
      <Option icon={Icons.USER} title="Personal data" onPress={() => {}} />
      <Option icon={Icons.USER} title="Language" onPress={() => {}} />
      <Option icon={Icons.USER} title="Theme" onPress={() => {}} />
      <Option icon={Icons.USER} title="Logout" onPress={logout} />
    </Styles.Container>
  );
};

Profile.propTypes = {
  style: ViewPropTypes.style,
};

Profile.defaultProps = {
  style: {},
};

export default Profile;

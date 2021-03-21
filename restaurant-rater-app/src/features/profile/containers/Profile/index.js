import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { Colors, Icons, Spacings, Typography } from 'shared/styles';
import { Option } from 'features/profile/components';
import { Avatar } from 'shared/components';
import { useLogout, useRole } from 'features/auth/hooks';
import SafeArea from 'shared/components/SafeArea';
import { useNavigation } from '@react-navigation/native';
import { Screens } from 'shared/constant';
import { useProfile } from 'features/profile/hooks';

const Profile = (props) => {
  const { style } = props;
  const { profile } = useProfile();
  const { role } = useRole();
  const { logout } = useLogout();
  const navigation = useNavigation();

  if (!profile) {
    return <Styles.Container />;
  }

  return (
    <Styles.Container style={style}>
      <Styles.AvatarContainer>
        <SafeArea>
          <Styles.AvatarContent>
            <Avatar
              style={Spacings.BOTTOM_SPACING.S}
              size={70}
              initials={`${profile.firstName[0]}${profile.lastName[0]}`}
            />
            <Typography.Subheader color={Colors.WHITE}>
              {`${profile.firstName} ${profile.lastName}`}
            </Typography.Subheader>
            <Typography.Paragraph color={Colors.WHITE}>
              {`${profile.email} (${role})`}
            </Typography.Paragraph>
          </Styles.AvatarContent>
        </SafeArea>
      </Styles.AvatarContainer>
      <Styles.Content contentContainerStyle={Spacings.FULL_PADDING}>
        <Option
          icon={Icons.USER}
          title="Update profile"
          onPress={() => navigation.navigate(Screens.PROFILE_EDIT)}
        />
        <Option
          icon={Icons.USER}
          title="Change password"
          onPress={() => navigation.navigate(Screens.PROFILE_CHANGE_PASSWORD)}
        />
        <Option
          icon={Icons.USER}
          title="Delete profile"
          onPress={() => navigation.navigate(Screens.PROFILE_DELETE)}
        />
        <Option icon={Icons.USER} title="Logout" onPress={logout} />
      </Styles.Content>
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

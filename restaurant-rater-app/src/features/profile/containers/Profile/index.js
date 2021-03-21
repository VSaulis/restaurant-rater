import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { Colors, Icons, Spacings, Typography } from 'shared/styles';
import { Option } from 'features/profile/components';
import { Avatar } from 'shared/components';
import { useLogout } from 'features/auth/hooks';
import SafeArea from 'shared/components/SafeArea';
import { useNavigation } from '@react-navigation/native';
import { Screens } from 'shared/constant';

const Profile = (props) => {
  const { style } = props;
  const { logout } = useLogout();
  const navigation = useNavigation();

  return (
    <Styles.Container style={style}>
      <Styles.AvatarContainer>
        <SafeArea>
          <Styles.AvatarContent>
            <Avatar style={Spacings.BOTTOM_SPACING.S} size={70} initials="VS" />
            <Typography.Subheader color={Colors.WHITE}>Vytautas Saulis</Typography.Subheader>
            <Typography.Paragraph color={Colors.WHITE}>
              vaulis11@gmail.com (Owner)
            </Typography.Paragraph>
          </Styles.AvatarContent>
        </SafeArea>
      </Styles.AvatarContainer>
      <Styles.Content contentContainerStyle={Spacings.FULL_PADDING}>
        <Option icon={Icons.USER} title="Update details" onPress={() => {}} />
        <Option
          icon={Icons.USER}
          title="Change password"
          onPress={() => navigation.navigate(Screens.PROFILE_CHANGE_PASSWORD)}
        />
        <Option icon={Icons.USER} title="Delete account" onPress={() => {}} />
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

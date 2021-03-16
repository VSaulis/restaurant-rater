import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { Icons, Spacings } from 'shared/styles';
import { Option } from 'features/profile/components';
import { Avatar } from 'shared/components';

const mockAvatar =
  'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg';

const Profile = (props) => {
  const { style } = props;

  return (
    <Styles.Container contentContainerStyle={Spacings.FULL_PADDING} style={style}>
      <Styles.AvatarContainer style={Spacings.BOTTOM_SPACING.L}>
        <Avatar uri={mockAvatar} />
      </Styles.AvatarContainer>
      <Option icon={Icons.USER} title="Personal data" onPress={() => {}} />
      <Option icon={Icons.USER} title="Language" onPress={() => {}} />
      <Option icon={Icons.USER} title="Theme" onPress={() => {}} />
      <Option icon={Icons.USER} title="Logout" onPress={() => {}} />
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

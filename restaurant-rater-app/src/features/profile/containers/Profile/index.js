import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { Button } from 'shared/components';
import { useNavigation } from '@react-navigation/native';
import { Screens } from 'shared/constant';

const Profile = (props) => {
  const { style } = props;
  const navigation = useNavigation();

  return (
    <Styles.Container style={style}>
      <Button
        label="Properties"
        onPress={() => navigation.navigate(Screens.PROPERTIES)}
      />
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

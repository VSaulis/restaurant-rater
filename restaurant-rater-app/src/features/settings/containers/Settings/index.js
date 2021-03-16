import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { Button } from 'shared/components';
import { useLogout } from 'features/auth/hooks';
import { Spacings } from 'shared/styles';

const Settings = (props) => {
  const { style } = props;
  const { logout } = useLogout();

  return (
    <Styles.Container contentContainerStyle={Spacings.FULL_PADDING} style={style}>
      <Button label="Logout" onPress={logout} />
    </Styles.Container>
  );
};

Settings.propTypes = {
  style: ViewPropTypes.style,
};

Settings.defaultProps = {
  style: {},
};

export default Settings;

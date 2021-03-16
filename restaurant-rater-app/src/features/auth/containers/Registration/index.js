import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { useRegistration } from 'features/auth/hooks';
import { Button } from 'shared/components';

const Registration = (props) => {
  const { style } = props;
  const { register, isLoading } = useRegistration();

  return (
    <Styles.Container style={style}>
      <Button label="Register" loading={isLoading} onPress={register} />
    </Styles.Container>
  );
};

Registration.propTypes = {
  style: ViewPropTypes.style,
};

Registration.defaultProps = {
  style: {},
};

export default Registration;

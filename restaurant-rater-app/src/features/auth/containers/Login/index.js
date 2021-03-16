import React, { useState } from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { useLogin } from 'features/auth/hooks';
import { Button, Input } from 'shared/components';
import { Colors, Spacings, Typography } from 'shared/styles';

const Login = (props) => {
  const { style } = props;
  const { login, isLoading } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login({ email, password });
  };

  return (
    <Styles.Container style={style}>
      <Styles.Content style={Spacings.BOTTOM_SPACING.L}>
        <Typography.Heading1 style={Spacings.BOTTOM_SPACING.XXL}>
          Easy to earn anywhere {'\n'}and anytime
        </Typography.Heading1>
        <Typography.Paragraph color={Colors.GREY} style={Spacings.BOTTOM_SPACING.L}>
          Sign in to your account
        </Typography.Paragraph>
        <Styles.FormContainer style={Spacings.BOTTOM_SPACING.XXL}>
          <Input
            onChange={({ value }) => setEmail(value)}
            value={email}
            placeholder="Enter your email"
          />
          <Input
            onChange={({ value }) => setPassword(value)}
            value={password}
            placeholder="Enter your password"
          />
        </Styles.FormContainer>
        <Button
          disabled={!email || !password}
          label="Sign in"
          loading={isLoading}
          onPress={handleLogin}
        />
      </Styles.Content>
      <Styles.Footer>
        <Typography.Paragraph color={Colors.GREY}>Don’t have an account?</Typography.Paragraph>
        <Styles.ButtonContainer>
          <Button nude label="Register" />
        </Styles.ButtonContainer>
      </Styles.Footer>
    </Styles.Container>
  );
};

Login.propTypes = {
  style: ViewPropTypes.style,
};

Login.defaultProps = {
  style: {},
};

export default Login;

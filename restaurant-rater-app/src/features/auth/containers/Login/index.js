import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { useLogin } from 'features/auth/hooks';
import { Button, Input } from 'shared/components';
import { Colors, Spacings, Typography } from 'shared/styles';
import { useNavigation } from '@react-navigation/native';
import { Screens } from 'shared/constant';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { Schemas } from 'features/auth/utils';

const Login = (props) => {
  const { style } = props;
  const navigation = useNavigation();
  const { login, isLoading } = useLogin();
  const { control, handleSubmit, errors } = useForm({ resolver: yupResolver(Schemas.loginSchema) });

  return (
    <Styles.Container style={style}>
      <Styles.Content contentContainerStyle={Spacings.FULL_PADDING}>
        <Typography.Heading1 style={Spacings.BOTTOM_SPACING.M}>Welcome Back</Typography.Heading1>
        <Typography.Paragraph color={Colors.NEW_GREY} style={Spacings.BOTTOM_SPACING.L}>
          Enter your Email for sign in. Enjoy your food :)
        </Typography.Paragraph>
        <Controller
          as={undefined}
          defaultValue=""
          control={control}
          name="email"
          render={({ onChange, onBlur, value }) => (
            <Input
              error={errors.email}
              onBlur={onBlur}
              style={Spacings.BOTTOM_SPACING.L}
              label="Email"
              onChange={(event) => onChange(event.value)}
              value={value}
              placeholder="Enter your email"
            />
          )}
        />
        <Controller
          as={undefined}
          defaultValue=""
          control={control}
          name="password"
          render={({ onChange, onBlur, value }) => (
            <Input
              error={errors.password}
              onBlur={onBlur}
              label="Password"
              secureTextEntry
              onChange={(event) => onChange(event.value)}
              value={value}
              placeholder="Enter your password"
            />
          )}
        />
      </Styles.Content>
      <Styles.Footer>
        <Button
          style={Spacings.BOTTOM_SPACING.L}
          label="Sign in"
          loading={isLoading}
          onPress={handleSubmit(login)}
        />
        <Typography.Paragraph
          onPress={() => navigation.navigate(Screens.REGISTRATION)}
          center
          color={Colors.NEW_GREY}
        >
          {`Do not have account? `}
          <Typography.Link>Sign up</Typography.Link>
        </Typography.Paragraph>
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

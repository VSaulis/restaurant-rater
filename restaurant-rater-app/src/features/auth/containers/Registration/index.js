import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { useRegistration } from 'features/auth/hooks';
import { Button, Input } from 'shared/components';
import { Colors, Spacings, Typography } from 'shared/styles';
import { useNavigation } from '@react-navigation/native';
import { Roles, Screens } from 'shared/constant';
import { RoleSelect } from 'features/auth/components';
import { Controller, useForm } from 'react-hook-form';
import { Schemas } from 'features/auth/utils';
import { yupResolver } from '@hookform/resolvers/yup';

const Registration = (props) => {
  const { style } = props;
  const navigation = useNavigation();
  const { control, handleSubmit, errors } = useForm({ resolver: yupResolver(Schemas.registrationSchema) });
  const { register, isLoading } = useRegistration();

  return (
    <Styles.Container style={style}>
      <Styles.Content contentContainerStyle={Spacings.FULL_PADDING}>
        <Typography.Heading1 style={Spacings.BOTTOM_SPACING.M}>Create Account</Typography.Heading1>
        <Typography.Paragraph color={Colors.NEW_GREY} style={Spacings.BOTTOM_SPACING.L}>
          Enter your First name, Last name, Email and Password for registration.
        </Typography.Paragraph>
        <Controller
          as={undefined}
          defaultValue={Roles.RegularUser}
          control={control}
          name="role"
          render={({ onChange, onBlur, value }) => (
            <RoleSelect
              error={errors.role}
              label="Role"
              onBlur={onBlur}
              style={Spacings.BOTTOM_SPACING.L}
              onChange={onChange}
              value={value}
            />
          )}
        />
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
          name="firstName"
          render={({ onChange, onBlur, value }) => (
            <Input
              error={errors.firstName}
              onBlur={onBlur}
              style={Spacings.BOTTOM_SPACING.L}
              label="First name"
              onChange={(event) => onChange(event.value)}
              value={value}
              placeholder="Enter your first name"
            />
          )}
        />
        <Controller
          as={undefined}
          defaultValue=""
          control={control}
          name="lastName"
          render={({ onChange, onBlur, value }) => (
            <Input
              error={errors.lastName}
              onBlur={onBlur}
              style={Spacings.BOTTOM_SPACING.L}
              label="Last name"
              onChange={(event) => onChange(event.value)}
              value={value}
              placeholder="Enter your last name"
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
          label="Sign up"
          loading={isLoading}
          onPress={handleSubmit(register)}
        />
        <Typography.Paragraph
          onPress={() => navigation.navigate(Screens.LOGIN)}
          center
          color={Colors.NEW_GREY}
        >
          {`Already have an account? `}
          <Typography.Link>Sign in</Typography.Link>
        </Typography.Paragraph>
      </Styles.Footer>
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

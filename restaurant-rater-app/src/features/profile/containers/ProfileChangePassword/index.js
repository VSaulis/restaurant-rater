import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { useChangePassword } from 'features/profile/hooks';
import { Button, Input } from 'shared/components';
import { Spacings, Typography } from 'shared/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { Schemas } from 'features/profile/utils';

const ProfileChangePassword = (props) => {
  const { style } = props;
  const { changePassword, isUpdating } = useChangePassword();
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schemas.changePasswordSchema),
  });

  return (
    <Styles.Container style={style}>
      <Styles.Content contentContainerStyle={Spacings.FULL_PADDING}>
        <Typography.Heading1 style={Spacings.BOTTOM_SPACING.L}>
          Change password
        </Typography.Heading1>
        <Controller
          as={undefined}
          defaultValue=""
          control={control}
          name="currentPassword"
          render={({ onChange, onBlur, value }) => (
            <Input
              error={errors.currentPassword}
              onBlur={onBlur}
              style={Spacings.BOTTOM_SPACING.L}
              label="Current password"
              secureTextEntry
              onChange={(event) => onChange(event.value)}
              value={value}
              placeholder="Enter your current password"
            />
          )}
        />
        <Controller
          as={undefined}
          defaultValue=""
          control={control}
          name="newPassword"
          render={({ onChange, onBlur, value }) => (
            <Input
              error={errors.newPassword}
              onBlur={onBlur}
              label="New password"
              secureTextEntry
              onChange={(event) => onChange(event.value)}
              value={value}
              placeholder="Enter your new password"
            />
          )}
        />
      </Styles.Content>
      <Styles.Footer>
        <Button
          label="Change password"
          loading={isUpdating}
          onPress={handleSubmit(changePassword)}
        />
      </Styles.Footer>
    </Styles.Container>
  );
};

ProfileChangePassword.propTypes = {
  style: ViewPropTypes.style,
};

ProfileChangePassword.defaultProps = {
  style: {},
};

export default ProfileChangePassword;

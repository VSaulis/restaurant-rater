import React from 'react';
import { ViewPropTypes } from 'react-native';
import { useChangePassword } from 'features/profile/hooks';
import { Button, Input } from 'shared/components';
import { Spacings, Containers } from 'shared/styles';
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
    <Containers.FilledContainer style={style}>
      <Containers.ScrollView contentContainerStyle={Spacings.HORIZONTAL_PADDING.L}>
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
      </Containers.ScrollView>
      <Containers.Footer>
        <Button
          label="Change password"
          loading={isUpdating}
          onPress={handleSubmit(changePassword)}
        />
      </Containers.Footer>
    </Containers.FilledContainer>
  );
};

ProfileChangePassword.propTypes = {
  style: ViewPropTypes.style,
};

ProfileChangePassword.defaultProps = {
  style: {},
};

export default ProfileChangePassword;

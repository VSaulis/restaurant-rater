import React from 'react';
import * as Styles from './styles';
import { Button, Input } from 'shared/components';
import { Spacings, Typography } from 'shared/styles';
import { Controller, useForm } from 'react-hook-form';
import { Schemas } from 'features/profile/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useProfile, useProfileEdit } from 'features/profile/hooks';
import { RefreshControl } from 'react-native';

const ProfileEdit = () => {
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schemas.updateProfileSchema),
  });
  const { profile } = useProfile();
  const { editProfile, isUpdating, isRefreshing, refresh } = useProfileEdit();

  return (
    <Styles.Container>
      <Styles.Content
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refresh} />}
        contentContainerStyle={Spacings.FULL_PADDING}
      >
        <Typography.Heading1 style={Spacings.BOTTOM_SPACING.L}>
          Update profile
        </Typography.Heading1>
        <Controller
          as={undefined}
          defaultValue={profile.email}
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
          defaultValue={profile.firstName}
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
          defaultValue={profile.lastName}
          control={control}
          name="lastName"
          render={({ onChange, onBlur, value }) => (
            <Input
              error={errors.lastName}
              onBlur={onBlur}
              label="Last name"
              onChange={(event) => onChange(event.value)}
              value={value}
              placeholder="Enter your last name"
            />
          )}
        />
      </Styles.Content>
      <Styles.Footer>
        <Button label="Update" loading={isUpdating} onPress={handleSubmit(editProfile)} />
      </Styles.Footer>
    </Styles.Container>
  );
};

export default ProfileEdit;

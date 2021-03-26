import React from 'react';
import { Button, Input } from 'shared/components';
import { Spacings, Containers } from 'shared/styles';
import { Controller, useForm } from 'react-hook-form';
import { RestaurantPropTypes, Schemas } from 'features/restaurants/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

const RestaurantForm = (props) => {
  const { isLoading, onSubmit, formData } = props;
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schemas.restaurantSchema),
  });

  return (
    <Containers.FilledContainer>
      <Containers.ScrollView contentContainerStyle={Spacings.HORIZONTAL_PADDING.L}>
        <Controller
          as={undefined}
          defaultValue={formData ? formData.title : ''}
          control={control}
          name="title"
          render={({ onChange, onBlur, value }) => (
            <Input
              error={errors.title}
              onBlur={onBlur}
              style={Spacings.BOTTOM_SPACING.L}
              label="Title"
              onChange={(event) => onChange(event.value)}
              value={value}
              placeholder="Enter restaurant title"
            />
          )}
        />
        <Controller
          as={undefined}
          defaultValue={formData ? formData.description : ''}
          control={control}
          name="description"
          render={({ onChange, onBlur, value }) => (
            <Input
              error={errors.description}
              onBlur={onBlur}
              style={Spacings.BOTTOM_SPACING.L}
              label="Description"
              onChange={(event) => onChange(event.value)}
              value={value}
              placeholder="Enter restaurant description"
            />
          )}
        />
      </Containers.ScrollView>
      <Containers.Footer>
        <Button label="Save" loading={isLoading} onPress={handleSubmit(onSubmit)} />
      </Containers.Footer>
    </Containers.FilledContainer>
  );
};

RestaurantForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  formData: RestaurantPropTypes.RestaurantFormData,
};

RestaurantForm.defaultProps = {
  formData: null,
  isLoading: false,
};

export default RestaurantForm;

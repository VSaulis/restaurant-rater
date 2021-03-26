import React from 'react';
import { Button, Input, Rating } from 'shared/components';
import { Spacings, Containers } from 'shared/styles';
import { Controller, useForm } from 'react-hook-form';
import { ReviewPropTypes, Schemas } from 'features/reviews/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

const ReviewForm = (props) => {
  const { isLoading, onSubmit, formData } = props;
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schemas.reviewSchema),
  });

  return (
    <Containers.FilledContainer>
      <Containers.ScrollView contentContainerStyle={Spacings.HORIZONTAL_PADDING.L}>
        <Controller
          as={undefined}
          defaultValue={formData ? formData.rating : 0}
          control={control}
          name="rating"
          render={({ onChange, onBlur, value }) => (
            <Rating
              onBlur={onBlur}
              onChange={onChange}
              label="Rating"
              error={errors.rating}
              style={Spacings.BOTTOM_SPACING.L}
              value={value}
              readonly={false}
              imageSize={24}
            />
          )}
        />
        <Controller
          as={undefined}
          defaultValue={formData ? formData.visited : ''}
          control={control}
          name="visited"
          render={({ onChange, onBlur, value }) => (
            <Input
              error={errors.visited}
              onBlur={onBlur}
              style={Spacings.BOTTOM_SPACING.L}
              label="Visit date"
              onChange={(event) => onChange(event.value)}
              value={value}
              placeholder="Enter visit date"
            />
          )}
        />
        <Controller
          as={undefined}
          defaultValue={formData ? formData.comment : ''}
          control={control}
          name="comment"
          render={({ onChange, onBlur, value }) => (
            <Input
              error={errors.comment}
              onBlur={onBlur}
              style={Spacings.BOTTOM_SPACING.L}
              label="Comment"
              onChange={(event) => onChange(event.value)}
              value={value}
              placeholder="Enter your comment about restaurant"
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

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  formData: ReviewPropTypes.ReviewFormData,
};

ReviewForm.defaultProps = {
  formData: null,
  isLoading: false,
};

export default ReviewForm;

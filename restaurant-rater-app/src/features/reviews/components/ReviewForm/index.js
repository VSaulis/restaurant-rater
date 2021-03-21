import React from 'react';
import * as Styles from './styles';
import { ViewPropTypes } from 'react-native';
import { Button, Input, Rating } from 'shared/components';
import { Spacings, Typography } from 'shared/styles';
import { Controller, useForm } from 'react-hook-form';
import { ReviewPropTypes, Schemas } from 'features/reviews/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

const ReviewForm = (props) => {
  const { style, isLoading, title, onSubmit, formData } = props;
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schemas.reviewSchema),
  });

  return (
    <Styles.Container style={style}>
      <Styles.Content contentContainerStyle={Spacings.FULL_PADDING}>
        <Typography.Heading1 style={Spacings.BOTTOM_SPACING.L}>
          {title}
        </Typography.Heading1>
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
      </Styles.Content>
      <Styles.Footer>
        <Button label={title} loading={isLoading} onPress={handleSubmit(onSubmit)} />
      </Styles.Footer>
    </Styles.Container>
  );
};

ReviewForm.propTypes = {
  style: ViewPropTypes.style,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  formData: ReviewPropTypes.ReviewFormData,
};

ReviewForm.defaultProps = {
  style: {},
  formData: null,
  isLoading: false,
};

export default ReviewForm;

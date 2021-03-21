import * as yup from 'yup';

export const reviewSchema = yup.object().shape({
  visited: yup.date('Visit date is invalid').required('Visit date is required'),
  rating: yup
    .number('Rating must be number')
    .integer('Rating must be integer')
    .required('Rating is required'),
  comment: yup
    .string()
    .min(6, 'Minimum 6 characters are required')
    .required('Comment is required'),
});

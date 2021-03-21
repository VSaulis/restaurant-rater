import * as yup from 'yup';

export const changePasswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .min(6, 'Minimum 6 characters are required')
    .required('Current password is required'),
  password: yup
    .string()
    .min(6, 'Minimum 6 characters are required')
    .required('Password is required'),
});

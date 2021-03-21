import * as yup from 'yup';

export const changePasswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .min(6, 'Minimum 6 characters are required')
    .required('Current password is required'),
  newPassword: yup
    .string()
    .min(6, 'Minimum 6 characters are required')
    .required('Password is required'),
});

export const updateProfileSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
});

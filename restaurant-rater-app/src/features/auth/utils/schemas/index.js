import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Minimum 6 characters are required')
    .required('Password is required'),
});

export const registrationSchema = yup.object().shape({
  role: yup.string().required('Role is required'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Minimum 6 characters are required')
    .required('Password is required'),
});

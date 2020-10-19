import { string } from 'yup'

export const firstName = string().required('First name is required')
export const lastName = string().required('Last name is required')

import './methods'

export const phone = string()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  .phoneNumberRequired('Phone number is invalid')
  .nullable()
  .required('Phone number is required')

export const email = string()
  .email('Email is invalid')
  .required('Email is required')

export const password = string()
  .min(8, 'Password should be at least 8 symbols')
  .max(50, 'Password is too long')
  .required('Password is required')

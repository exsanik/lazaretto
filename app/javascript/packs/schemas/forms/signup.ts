import { object } from 'yup'
import { phone, password, lastName, firstName } from '../fields'

const LoginSchema = object().shape({
  mobile: phone,
  password,
  password_confirmation: password
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .passwordConfirmation('Password confirmation should match password')
    .required('Password confirmation is required'),
  last_name: lastName,
  first_name: firstName
})

export default LoginSchema

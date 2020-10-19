import { object } from 'yup'
import { phone, password } from '../fields'

const LoginSchema = object().shape({
  mobile: phone,
  password
})

export default LoginSchema

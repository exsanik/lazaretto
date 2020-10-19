import { addMethod, string, StringSchema } from 'yup'
import { parsePhoneNumberFromString } from 'libphonenumber-js/mobile'

addMethod(string, 'passwordConfirmation', function(
  this: StringSchema,
  message: string,
  passwordName = 'password'
) {
  return this.test('passwordConfirmation', message, function(value) {
    const { [passwordName]: password } = this?.parent

    return value === password
  })
})

addMethod(string, 'phoneNumberRequired', function(
  this: StringSchema,
  message: string
) {
  return this.test('phoneNumberRequired', message, (value: any) => {
    if (!value) return null

    if (!parsePhoneNumberFromString(value)?.isValid()) return null

    return !!value
      .toString()
      .replace('+', '')
      .trim()
  })
})

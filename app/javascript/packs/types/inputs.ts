export type UserLogin = {
  mobile: string
  password: string
}

export type PatientSignUp = UserLogin & {
  first_name: string
  last_name: string
  password_confirmation: string

  type: 'Patient'
}

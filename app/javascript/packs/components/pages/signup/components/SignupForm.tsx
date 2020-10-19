import React, { useCallback } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'

import { TextField, PhoneField } from '../../../../components/shared'
import useYupValidationResolver from '../../../../helpers/useYupValidationResolver'
import { PatientSignUp } from 'types/inputs'
import SignupSchema from '../../../../schemas/forms/signup'

import Lazaretto from '../../../../services/Lazaretto'
import ErrorHandler from '../../../../services/ErrorHandler'

const SignupForm: React.FC = () => {
  const resolver = useYupValidationResolver<PatientSignUp>(SignupSchema)

  const { setValue, errors, handleSubmit, register, setError } = useForm({
    resolver
  })

  const onSubmit = useCallback(async data => {
    try {
      const resp = await Lazaretto.signup({ ...data, type: 'Patient' })
      console.log('resp', resp)
    } catch (err) {
      const error = ErrorHandler.parseErrors(err).getErrors()
      Object.keys(error).forEach(name => {
        setError(name, error[name])
      })
    }
  }, [])

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="first_name"
        label="First name"
        register={register}
        setValue={setValue}
        error={errors['first_name']?.message}
      />
      <TextField
        name="last_name"
        label="Last name"
        register={register}
        setValue={setValue}
        error={errors['last_name']?.message}
      />
      <PhoneField
        name="mobile"
        label="Mobile"
        register={register}
        setValue={setValue}
        error={errors['mobile']?.message}
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        register={register}
        setValue={setValue}
        error={errors['password']?.message}
      />
      <TextField
        name="password_confirmation"
        label="Password confirmation"
        type="password"
        register={register}
        setValue={setValue}
        error={errors['password_confirmation']?.message}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default SignupForm

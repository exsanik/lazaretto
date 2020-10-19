import React, { useEffect, useCallback } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'

import LoginSchema from '../../../../schemas/forms/login'
import useYupValidationResolver from '../../../../helpers/useYupValidationResolver'

import { UserLogin } from 'types/inputs'
import { TextField, PhoneField } from '../../../shared'

import Lazaretto from '../../../../services/Lazaretto'

const LoginForm: React.FC = () => {
  const resolver = useYupValidationResolver<UserLogin>(LoginSchema)
  const { handleSubmit, setValue, register, errors } = useForm({ resolver })

  const onSubmit = useCallback(async data => {
    const resp = await Lazaretto.login(data)
  }, [])

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <PhoneField
        name="mobile"
        label="Mobile phone"
        register={register}
        setValue={setValue}
        error={errors['mobile']?.message}
      />
      <TextField
        label="Enter Password"
        name="password"
        placeholder="Input password"
        type="password"
        register={register}
        setValue={setValue}
        error={errors['password']?.message}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default LoginForm

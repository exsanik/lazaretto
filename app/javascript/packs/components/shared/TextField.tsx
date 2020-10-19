import React, { useEffect, useCallback } from 'react'

import { Form, FormInputProps } from 'semantic-ui-react'
import { HookFormProps } from 'types/hookForm'

type AllProps = HookFormProps & FormInputProps

const TextField: React.FC<AllProps> = ({
  setValue,
  register,
  name,
  ...rest
}) => {
  useEffect(() => {
    register({ name })
  }, [])

  const handlerChange = useCallback((e, { name, value }) => {
    setValue(name, value)
  }, [])

  return (
    <Form.Field>
      <Form.Input name={name} onChange={handlerChange} {...rest} />
    </Form.Field>
  )
}

export default TextField

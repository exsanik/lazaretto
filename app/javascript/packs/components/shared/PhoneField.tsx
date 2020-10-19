import React from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import { Form, Label } from 'semantic-ui-react'

import { HookFormProps } from 'types/hookForm'

type Props = {
  name: string
  error?: string
  label?: string
}

type AllProps = HookFormProps & Props

const PhoneField: React.FC<AllProps> = ({
  name,
  register,
  setValue,
  error,
  label,
  ...rest
}) => {
  useEffect(() => {
    register({ name })
  }, [register])

  const handleChange = useCallback(
    (phone: string) => {
      setValue(name, `+${phone}`)
    },
    [name]
  )

  return (
    <Form.Field error={!!error}>
      <label>{label}</label>
      <PhoneInput
        inputStyle={{ paddingLeft: 50 }}
        country="ua"
        inputProps={{
          name
        }}
        onChange={handleChange}
        {...rest}
      />
      {error && (
        <Label prompt pointing>
          {error}
        </Label>
      )}
    </Form.Field>
  )
}

export default PhoneField

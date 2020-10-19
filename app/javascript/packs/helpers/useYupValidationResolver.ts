import { useCallback } from 'react'
import { ObjectSchema } from 'yup'
import { Resolver } from 'react-hook-form'

type Result<Input extends Record<string, any>> = {
  values: Input | Record<string, any>
  errors:
    | {
        [k in keyof Input]: { type: string; message: string }
      }
    | Record<string, any>
}

const useYupValidationResolver = <Input>(
  validationSchema: ObjectSchema
): Resolver<Result<Input>> =>
  useCallback(
    async data => {
      try {
        const values = ((await validationSchema.validate(data, {
          abortEarly: false
        })) as unknown) as Input
        return {
          values,
          errors: {}
        }
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message
              }
            }),
            {}
          )
        }
      }
    },
    [validationSchema]
  )

export default useYupValidationResolver

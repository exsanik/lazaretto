import { SetValueConfig } from 'react-hook-form'

export type HookFormProps = {
  register: (
    { name }: { name: string },
    options?: { [key: string]: any }
  ) => void
  setValue: (name: string, value: any, config?: SetValueConfig) => void
}

import { capitalize } from '../helpers/functions'

type Errors = {
  errors?: { [key: string]: string | string[] }
  base?: string
}

class ErrorHandler {
  errors = {}
  base = ''

  parseErrors(error: Errors) {
    if (error) {
      if (!!error.base) {
        this.base = error.base
        console.log('error.base', error.base)
      }

      if (!!error.errors) {
        this.errors = Object.entries(error.errors).reduce(
          (acc, [key, value]) => {
            acc[key] = {
              message: Array.isArray(value)
                ? `${capitalize(key)} ${value[0]}`
                : `${capitalize(key)} ${value}`,
              type: 'server'
            }
            return acc
          },
          {}
        )
      }
    }

    return this
  }

  getErrors = () => this.errors
  getBase = () => this.base

  showBase = () => console.log('this.base', this.base)
}

export default new ErrorHandler()

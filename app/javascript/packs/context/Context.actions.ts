import { SetUserAction, UserTypes } from './Context.types'

export const setUser = (payload): SetUserAction => ({
  type: UserTypes.SetUser,
  payload
})

import { User } from 'types/models/User'

type Action = {
  type: string
  payload?: any
}
/**
 * Actions types
 */
export enum UserTypes {
  SetUser = 'user::setUser'
}

/**
 * Actions interfaces
 */
export interface SetUserAction extends Action {
  type: UserTypes.SetUser
  payload: User
}
export type ActionsUnion = SetUserAction

/**
 * LayoutState
 */
export interface LayoutState {
  user: User
}

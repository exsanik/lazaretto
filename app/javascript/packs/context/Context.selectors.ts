import { LayoutState } from './Context.types'

export const authorized = (state: LayoutState): boolean => !!state.user.mobile

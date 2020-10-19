import { LayoutState, ActionsUnion, UserTypes } from './Context.types'

export const initialState: LayoutState = {
  user: {
    full_name: '',
    first_name: '',
    last_name: '',
    mobile: ''
  }
}

export const layoutReducer = (
  state,
  { type, payload }: ActionsUnion
): LayoutState => {
  switch (type) {
    case UserTypes.SetUser:
      return { ...state, user: payload }
    default:
      return state
  }
}

import React from 'react'

import { initialState, layoutReducer } from './Context.reducer'

import { LayoutState, ActionsUnion } from './Context.types'

export const AppContext = React.createContext<{
  state: LayoutState
  dispatch: React.Dispatch<ActionsUnion>
}>({
  state: initialState,
  dispatch: () => null
})

const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(layoutReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider

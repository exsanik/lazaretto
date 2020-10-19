import React, { useEffect, useContext, useMemo } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'

import LoginPage from './components/pages/login'
import SignupPage from './components/pages/signup'
import DashboardPage from './components/pages/dashboard'

import { AppContext } from './context'
import { setUser } from './context/Context.actions'
import { authorized } from './context/Context.selectors'
import Lazaretto from './services/Lazaretto'

import { LocalStorage } from './constants'

import 'semantic-ui-css/semantic.min.css'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react'

const App: React.FC = () => {
  const { dispatch, state } = useContext(AppContext)
  const [initialized, setInitialized] = useState(false)
  const isAuthorized = useMemo(() => authorized(state), [state])

  useEffect(() => {
    const token = localStorage.getItem(LocalStorage.token)
    if (token) {
      Lazaretto.setHeader('Authorization', token)
      ;(async () => {
        const resp = await Lazaretto.auth()
        dispatch(setUser(resp))
        setInitialized(true)
      })()
    }
  }, [dispatch])

  return initialized ? (
    isAuthorized ? (
      <Switch>
        <Route exact path="/dashboard" component={DashboardPage} />

        <Redirect to="/dashboard" />
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />

        <Redirect to="/login" />
      </Switch>
    )
  ) : (
    <Loader active inline="centered" />
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from 'helpers/PrivateRoute'
import UnAuthApp from 'pages/UnAuthApp/UnAuthApp'
import AuthApp from 'pages/AuthApp/AuthApp'
import AuthProvider from 'providers/AuthProvider'
import { Wrapper } from 'pages/App/App.styles'

const App = () => {
  return (
    <Router>
      <Wrapper>
        <AuthProvider>
          <PrivateRoute unauth={<UnAuthApp />}>
            <AuthApp />
          </PrivateRoute>
        </AuthProvider>
      </Wrapper>
    </Router>
  )
}

export default App

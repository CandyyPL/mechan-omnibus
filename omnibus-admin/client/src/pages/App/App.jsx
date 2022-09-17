import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from '@/helpers/PrivateRoute'
import UnAuthApp from '@/pages/UnAuthApp/UnAuthApp'
import AuthApp from '@/pages/AuthApp/AuthApp'
import AuthProvider from '@/providers/AuthProvider'
import { Wrapper } from '@/pages/App/App.styles'
import SearchProvider from '@/providers/SearchProvider'

const App = () => {
  return (
    <Router>
      <Wrapper>
        <AuthProvider>
          <PrivateRoute unauth={<UnAuthApp />}>
            <SearchProvider>
              <AuthApp />
            </SearchProvider>
          </PrivateRoute>
        </AuthProvider>
      </Wrapper>
    </Router>
  )
}

export default App

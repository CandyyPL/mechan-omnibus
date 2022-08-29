import PrivateRoute from '@/helpers/PrivateRoute'
import { Wrapper } from '@/pages/App/App.tyles'
import AuthApp from '@/pages/AuthApp/AuthApp'
import UnAuthApp from '@/pages/UnAuthApp/UnAuthApp'
import AuthProvider from '@/providers/AuthProvider'
import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const App: FC = () => {
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

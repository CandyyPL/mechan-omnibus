import React from 'react'
import { Wrapper } from '@/pages/App/App.styles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import PrivateRoute from '@/helpers/PrivateRoute'
import Profile from '@/pages/Profile/Profile'

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </Wrapper>
  )
}

export default App

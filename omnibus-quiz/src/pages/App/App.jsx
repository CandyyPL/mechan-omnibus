import React from 'react'
import { Wrapper } from '@/pages/App/App.styles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import PrivateRoute from '@/helpers/PrivateRoute'
import Profile from '@/pages/Profile/Profile'
import QuizPage from '@/pages/Quiz/QuizPage'
import QuizSummary from '@/pages/Quiz/Summary/QuizSummary'

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/profile'
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path='/play'
            element={
              <PrivateRoute>
                <QuizPage />
              </PrivateRoute>
            }
          />
          <Route
            path='/play/summary'
            element={
              <PrivateRoute>
                <QuizSummary />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </Wrapper>
  )
}

export default App

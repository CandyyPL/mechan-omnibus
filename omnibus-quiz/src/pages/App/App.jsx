import React from 'react'
import { Wrapper } from 'pages/App/App.styles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home/Home'
import Login from 'pages/Login/Login'
import PrivateRoute from 'helpers/PrivateRoute'

const App = () => {
  return (
    <Wrapper>
      <Router>
        <>
          {/* UNAUTH APP */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </>
        <PrivateRoute unauth={<Home />}>{/* AUTH APP */}</PrivateRoute>
      </Router>
    </Wrapper>
  )
}

export default App

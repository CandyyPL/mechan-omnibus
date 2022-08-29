import Home from '@/pages/Home/Home'
import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

const AuthApp: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default AuthApp

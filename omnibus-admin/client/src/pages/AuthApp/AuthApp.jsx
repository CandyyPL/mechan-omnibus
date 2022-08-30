import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home/Home'

const AuthApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default AuthApp

import { AuthContext } from '@/providers/AuthProvider'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext)

  if (currentUser && currentUser.uid) return children

  return <Navigate to='/home' />
}

export default PrivateRoute

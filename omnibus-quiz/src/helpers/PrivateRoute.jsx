import { AuthContext } from 'providers/AuthProvider'
import { useContext } from 'react'

const PrivateRoute = ({ children, unauth }) => {
  const { currentUser } = useContext(AuthContext)

  if (currentUser && currentUser.uid) return children

  return unauth
}

export default PrivateRoute

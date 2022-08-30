import { AuthContext } from 'providers/AuthProvider'
import { useContext } from 'react'

const PrivateRoute = ({ unauth, children }) => {
  const { currentUser } = useContext(AuthContext)

  if (currentUser && currentUser.uid) return children

  return unauth
}

export default PrivateRoute

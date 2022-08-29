import { AuthContext } from '@/providers/AuthProvider'
import React, { FC, useContext } from 'react'

interface Props {
  children: React.ReactElement
  unauth: React.ReactElement
}

const PrivateRoute: FC<Props> = ({ children, unauth }) => {
  const userData: { uid?: string } = useContext(AuthContext)

  if (userData?.uid) return children

  return unauth
}

export default PrivateRoute

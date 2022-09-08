import { auth } from '@/auth/firebase'
import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  auth.onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user)
      setLoading(false)
    } else {
      setCurrentUser(null)
      setLoading(false)
    }
  })

  const provide = { currentUser }

  return <AuthContext.Provider value={provide}>{loading ? null : children}</AuthContext.Provider>
}

export default AuthProvider

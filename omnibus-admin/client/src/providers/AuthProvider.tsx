import React, { FC, useState } from 'react'
import { auth } from '@/auth/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { createContext } from 'react'

export const AuthContext = createContext({})

interface Props {
  children: React.ReactNode
}

const AuthProvider: FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser]: [{} | null, Function] = useState(null)
  const [loading, setLoading]: [boolean, Function] = useState(true)

  onAuthStateChanged(auth, user => {
    if (user) {
      setCurrentUser(user)
      setLoading(false)
    } else {
      setCurrentUser(null)
      setLoading(false)
    }
  })

  const provide = currentUser!

  return <AuthContext.Provider value={provide}>{loading ? null : children}</AuthContext.Provider>
}

export default AuthProvider

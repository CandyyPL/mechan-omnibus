import { readData } from '@/auth/dbMethods'
import { auth } from '@/auth/firebase'
import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [dbSnap, setDbSnap] = useState(null)
  const [loading, setLoading] = useState(true)

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const dbRes = await readData(`users/${user.uid}`)
      setDbSnap(dbRes)
      setCurrentUser(user)
      setLoading(false)
    } else {
      setDbSnap(null)
      setCurrentUser(null)
      setLoading(false)
    }
  })

  const provide = { currentUser, dbSnap }

  return <AuthContext.Provider value={provide}>{loading ? null : children}</AuthContext.Provider>
}

export default AuthProvider

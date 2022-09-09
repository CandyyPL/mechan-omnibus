import React, { createContext, useEffect, useState } from 'react'
import { auth, fireDb } from '@/auth/firebase'
import { ref, onValue } from 'firebase/database'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [dbSnap, setDbSnap] = useState(null)
  const [loading, setLoading] = useState(true)

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      setCurrentUser(user)
      setLoading(false)
    } else {
      setDbSnap(null)
      setCurrentUser(null)
      setLoading(false)
    }
  })

  useEffect(() => {
    try {
      const userDataRef = ref(fireDb, `users/${auth.currentUser.uid}`)
      onValue(
        userDataRef,
        (snap) => {
          setDbSnap(snap.val())
        },
        {
          onlyOnce: true,
        }
      )
    } catch (err) {
      console.log(err)
      setDbSnap(null)
    }
  }, [currentUser])

  const provide = { currentUser, dbSnap }

  return <AuthContext.Provider value={provide}>{loading ? null : children}</AuthContext.Provider>
}

export default AuthProvider

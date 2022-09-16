import React, { createContext, useState } from 'react'
import { auth } from '@/auth/firebase'
import Loading from '@/pages/Loading/Loading'
import { useEffect } from 'react'
import { getData, updateData } from '@/db/dbMethods'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [mongoUser, setMongoUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user)

        updateData(user.email, null, { uid: user.uid }).then(() => {})

        getData(user.uid).then((res) => setMongoUser(res.data.user))

        setLoading(false)
      } else {
        setMongoUser(null)
        setCurrentUser(null)
        setLoading(false)
      }
    })
  }, [])

  const provide = { currentUser, mongoUser }

  return (
    <AuthContext.Provider value={provide}>{loading ? <Loading /> : children}</AuthContext.Provider>
  )
}

export default AuthProvider

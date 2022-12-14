import React, { createContext, useState } from 'react'
import { auth } from '@/auth/firebase'
import Loading from '@/pages/Loading/Loading'
import { useEffect } from 'react'
import { getData, updateData } from '@/db/dbMethods'
import ErrorDisplay from '@/pages/Error/Error'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [mongoUser, setMongoUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const getMongoUser = (user = currentUser) => {
    getData(user.uid).then((res) => setMongoUser(res.data.user))
  }

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user)

        updateData(user.email, null, { uid: user.uid }).then(() => {})

        getMongoUser(user)

        setLoading(false)
      } else {
        setMongoUser(null)
        setCurrentUser(null)
        setLoading(false)
      }
    })
  }, [])

  useEffect(() => {
    if (mongoUser === null) setError(true)
    else setError(false)
  }, [mongoUser])

  const provide = { currentUser, mongoUser, getMongoUser }

  return (
    <AuthContext.Provider value={provide}>
      {loading ? <Loading /> : <>{error ? <ErrorDisplay /> : children}</>}
    </AuthContext.Provider>
  )
}

export default AuthProvider

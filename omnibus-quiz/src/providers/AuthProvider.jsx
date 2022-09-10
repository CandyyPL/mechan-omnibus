import React, { createContext, useEffect, useState } from 'react'
import { auth } from '@/auth/firebase'
import { addData, getData } from '@/auth/dbMethods'
import axios from 'axios'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [dbSnap, setDbSnap] = useState(null)
  const [loading, setLoading] = useState(true)

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      setCurrentUser(user)
      getData().then((data) => {
        setDbSnap(data)
      })

      if (dbSnap !== null && dbSnap.name === undefined) {
        axios.get('http://localhost:5000/getall').then((res) => {
          const foundUser = res.data.users.find((item) => item.email === user.email)
          addData({ name: foundUser.name })
        })
      }

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

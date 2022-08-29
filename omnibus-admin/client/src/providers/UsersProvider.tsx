import axios from 'axios'
import React, { createContext, FC, useEffect, useState } from 'react'

interface Props {
  children?: React.ReactNode
}

export const UsersContext = createContext({})

const UsersProvider: FC<Props> = ({ children }) => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const reloadUsers = async () => {
    try {
      const res = await axios.get('http://localhost:4000/getall')

      res.data.users.sort((a: { [key: string]: number }, b: { [key: string]: number }) => {
        return b.date - a.date
      })

      setUsers(res.data.users)
      setLoading(false)
    } catch (err) {
      console.log(err)

      setError('Internal server error')
      setLoading(false)
    }
  }

  useEffect(() => {
    reloadUsers()
  }, [])

  const provide = { users, reloadUsers, error, loading }

  return <UsersContext.Provider value={provide}>{children}</UsersContext.Provider>
}

export default UsersProvider

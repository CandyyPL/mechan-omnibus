import React, { createContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const ContentContext = createContext({})

const ContentProvider = ({ children }) => {
  const [content, setContent] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    reloadContent()
  }, [])

  const reloadContent = async () => {
    try {
      const res = await axios.get('http://localhost:4000/getall')
      console.log(res)
      setContent(res.data.users)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  const provide = {
    content,
    loading,
    error,
    reloadContent,
  }

  return <ContentContext.Provider value={provide}>{children}</ContentContext.Provider>
}

export default ContentProvider

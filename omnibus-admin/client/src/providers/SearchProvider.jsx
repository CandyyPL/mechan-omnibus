import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const SearchContext = createContext({})

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('')

  const provide = { searchValue, setSearchValue }

  return <SearchContext.Provider value={provide}>{children}</SearchContext.Provider>
}

export default SearchProvider

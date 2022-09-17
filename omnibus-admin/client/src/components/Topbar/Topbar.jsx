import React from 'react'
import { Wrapper } from '@/components/Topbar/Topbar.styles'
import { signOut } from 'firebase/auth'
import { auth } from '@/auth/firebase'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { SearchContext } from '@/providers/SearchProvider'

const Topbar = () => {
  const handleSignOut = () => {
    signOut(auth)
  }

  const { setSearchValue } = useContext(SearchContext)

  const [search, setSearch] = useState('')

  useEffect(() => {
    setSearchValue(search)
  }, [search])

  return (
    <Wrapper>
      <div className='left'>
        <span>OMNIBUS ADMIN</span>
      </div>
      <div className='center'>
        <input
          type='text'
          placeholder='Search for users'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='right'>
        <button onClick={handleSignOut}>LOGOUT</button>
      </div>
    </Wrapper>
  )
}

export default Topbar

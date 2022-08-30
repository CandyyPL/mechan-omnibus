import React from 'react'
import { Wrapper } from 'components/Topbar/Topbar.styles'
import { signOut } from 'firebase/auth'
import { auth } from 'auth/firebase'

const Topbar = () => {
  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <Wrapper>
      <span>OMNIBUS ADMIN</span>
      <button onClick={handleSignOut}>LOGOUT</button>
    </Wrapper>
  )
}

export default Topbar

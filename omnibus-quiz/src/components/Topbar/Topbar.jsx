import React, { useContext } from 'react'
import { Logo, SideDiv, Wrapper } from 'components/Topbar/Topbar.styles'
import busImg from 'assets/bus-small.png'
import { Link } from 'react-router-dom'
import { AuthContext } from 'providers/AuthProvider'
import { signOut } from 'firebase/auth'
import { auth } from 'auth/firebase'

const Topbar = () => {
  const { currentUser } = useContext(AuthContext)

  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <Wrapper>
      <SideDiv />
      <Logo>
        <img src={busImg} alt='bus' />
        OMNIBUS
        <img src={busImg} alt='bus' />
      </Logo>
      <SideDiv>
        {currentUser != null && currentUser.uid ? (
          <>
            {window.location.pathname == '/profile' ? (
              <>
                <Link to='/'>
                  <button>STRONA GŁÓWNA</button>
                </Link>
                <button onClick={handleSignOut}>WYLOGUJ</button>
              </>
            ) : (
              <Link to='/profile'>
                <button>PROFIL</button>
              </Link>
            )}
          </>
        ) : (
          <>
            {window.location.pathname == '/login' ? (
              <Link to='/'>
                <button>STRONA GŁÓWNA</button>
              </Link>
            ) : (
              <Link to='/login'>
                <button>ZALOGUJ SIĘ</button>
              </Link>
            )}
          </>
        )}
      </SideDiv>
    </Wrapper>
  )
}

export default Topbar

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
          <button onClick={handleSignOut}>
            {/* <Link to='/dashboard'>PROFIL</Link> */}
            WYLOGUJ
          </button>
        ) : (
          <>
            {window.location.pathname == '/login' ? (
              <button>
                <Link to='/'>STRONA GŁÓWNA</Link>
              </button>
            ) : (
              <button>
                <Link to='/login'>ZALOGUJ SIĘ</Link>
              </button>
            )}
          </>
        )}
      </SideDiv>
    </Wrapper>
  )
}

export default Topbar

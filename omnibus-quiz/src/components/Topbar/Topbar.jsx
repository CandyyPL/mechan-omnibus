import React, { useContext } from 'react'
import { Logo, SideDiv, Wrapper } from 'components/Topbar/Topbar.styles'
import busImg from 'assets/bus-small.png'
import { Link } from 'react-router-dom'
import { AuthContext } from 'providers/AuthProvider'

const Topbar = () => {
  const { currentUser } = useContext(AuthContext)

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
          <button>
            <Link to='/dashboard'>PROFIL</Link>
          </button>
        ) : (
          <button>
            <Link to='/profile'>ZALOGUJ SIĘ</Link>
          </button>
        )}
      </SideDiv>
    </Wrapper>
  )
}

export default Topbar

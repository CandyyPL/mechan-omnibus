import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from 'auth/firebase'
import { views } from 'pages/Profile/Profile'
import { SideBarLogo, SideBarMenu, Wrapper } from 'components/Profile/Sidebar/Sidebar.styles'
import busImg from 'assets/bus-small.png'

const Sidebar = ({ changeView }) => {
  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <Wrapper>
      <SideBarLogo>
        OMNIBUS <img src={busImg} alt='bus' />
      </SideBarLogo>
      <SideBarMenu>
        <li onClick={() => changeView(views.DASHBOARD)}>Dashboard</li>
        <li onClick={() => changeView(views.LEADERBOARD)}>Leaderboard</li>
        <li onClick={() => changeView(views.SHOP)}>Shop</li>
        <li onClick={() => changeView(views.OPTIONS)}>Options</li>
      </SideBarMenu>
      <button onClick={handleSignOut}>WYLOGUJ SIĘ</button>
    </Wrapper>
  )
}

export default Sidebar

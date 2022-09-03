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
        <li onClick={() => changeView(views.LEADERBOARD)}>Ranking</li>
        <li onClick={() => changeView(views.SHOP)}>Sklep</li>
        <li onClick={() => changeView(views.OPTIONS)}>Ustawienia</li>
      </SideBarMenu>
      <button onClick={handleSignOut}>WYLOGUJ SIĘ</button>
    </Wrapper>
  )
}

export default Sidebar

import React, { useState } from 'react'
import { DashboardTopbar, DashboardWrapper, Wrapper } from 'pages/Profile/Profile.styles'
import Sidebar from 'components/Profile/Sidebar/Sidebar'
import MainView from 'helpers/MainView'

export const views = {
  DASHBOARD: 'dashboard',
  LEADERBOARD: 'leaderboard',
  SHOP: 'shop',
  OPTIONS: 'options',
}

const Profile = () => {
  const [mainView, setMainView] = useState(views.DASHBOARD)

  return (
    <Wrapper>
      <Sidebar changeView={setMainView} />
      <DashboardWrapper>
        <DashboardTopbar />
        <MainView view={mainView} />
      </DashboardWrapper>
    </Wrapper>
  )
}

export default Profile

import React, { useState } from 'react'
import { DashboardWrapper, Wrapper } from '@/pages/Profile/Profile.styles'
import Sidebar from '@/components/Profile/Sidebar/Sidebar'
import MainView from '@/helpers/MainView'
import ProfileTopbar from '@/components/Profile/ProfileTopbar/ProfileTopbar'

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
        <ProfileTopbar />
        <MainView view={mainView} />
      </DashboardWrapper>
    </Wrapper>
  )
}

export default Profile

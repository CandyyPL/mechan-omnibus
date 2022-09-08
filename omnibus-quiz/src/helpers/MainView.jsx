import React from 'react'
import { views } from '@/pages/Profile/Profile'
import DashboardView from '@/components/Profile/Views/DashboardView/DashboardView'
import LeaderboardView from '@/components/Profile/Views/Leaderboard/LeaderboardView'
import OptionsView from '@/components/Profile/Views/Options/OptionsView'

const MainView = ({ view }) => {
  switch (view) {
    case views.DASHBOARD:
      return <DashboardView />
    case views.LEADERBOARD:
      return <LeaderboardView />
    // case views.SHOP:
    //   return <ShopView />
    case views.OPTIONS:
      return <OptionsView />
    default:
      return <DashboardView />
  }
}

export default MainView

import React from 'react'
import {
  GameModes,
  Games,
  LastGames,
  UserStats,
  Wrapper,
} from 'components/Profile/Views/DashboardView/DashboardView.styles'

const DashboardView = () => {
  return (
    <Wrapper>
      <UserStats />
      <Games>
        <GameModes />
        <LastGames />
      </Games>
    </Wrapper>
  )
}

export default DashboardView

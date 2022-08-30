import React from 'react'
import { Wrapper } from 'pages/Home/Home.styles'
import Topbar from 'components/Topbar/Topbar'
import ParticipantsList from 'components/ParticipantsList/ParticipantsList'
import ContentProvider from 'providers/ContentProvider'

const Home = () => {
  return (
    <Wrapper>
      <Topbar />
      <ContentProvider>
        <ParticipantsList />
      </ContentProvider>
    </Wrapper>
  )
}

export default Home

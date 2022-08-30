import React from 'react'
import { Wrapper } from 'pages/App/App.styles'
import Topbar from 'components/Topbar/Topbar'
import ParticipantsList from 'components/ParticipantsList/ParticipantsList'
import ContentProvider from 'providers/ContentProvider'

const App = () => {
  return (
    <Wrapper>
      <Topbar />
      <ContentProvider>
        <ParticipantsList />
      </ContentProvider>
    </Wrapper>
  )
}

export default App

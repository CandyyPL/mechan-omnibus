import React from 'react'
import { Wrapper } from 'pages/Home/Home.styles'
import Topbar from 'components/Topbar/Topbar'
import TopPart from 'components/TopPart/TopPart'
import JoinPart from 'components/JoinPart/JoinPart'
import Footer from 'components/Footer/Footer'

const Home = () => {
  return (
    <Wrapper>
      <Topbar />
      <TopPart />
      <JoinPart />
      <Footer />
    </Wrapper>
  )
}

export default Home

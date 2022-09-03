import React from 'react'
import { Wrapper } from 'pages/Home/Home.styles'
import Topbar from 'components/Topbar/Topbar'
import TopPart from 'components/Home/TopPart/TopPart'
import JoinPart from 'components/Home/JoinPart/JoinPart'
import Footer from 'components/Home/Footer/Footer'

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

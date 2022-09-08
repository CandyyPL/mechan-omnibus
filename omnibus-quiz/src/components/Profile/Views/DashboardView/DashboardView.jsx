import React, { useState, useEffect } from 'react'
import {
  GameModes,
  Games,
  LastGames,
  RankWrapper,
  UserStats,
  Wrapper,
} from '@/components/Profile/Views/DashboardView/DashboardView.styles'
import copperRankImg from '@/assets/ranks/copper.png'
import silverRankImg from '@/assets/ranks/silver.png'
import goldRankImg from '@/assets/ranks/gold.png'
import titaniumRankImg from '@/assets/ranks/titanium.png'
import uraniumRankImg from '@/assets/ranks/uranium.png'
import platinumRankImg from '@/assets/ranks/platinum.png'
import omnibusRankImg from '@/assets/bus-big.png'
import ProgressInfo from '@/components/Profile/ProgressInfo/ProgressInfo'

const ranks = {
  COPPER: {
    name: 'Miedź',
    img: copperRankImg,
  },
  SILVER: {
    name: 'Srebro',
    img: silverRankImg,
  },
  GOLD: {
    name: 'Złoto',
    img: goldRankImg,
  },
  TITANIUM: {
    name: 'Tytan',
    img: titaniumRankImg,
  },
  URANIUM: {
    name: 'Uran',
    img: uraniumRankImg,
  },
  PLATINUM: {
    name: 'Platyna',
    img: platinumRankImg,
  },
  OMNIBUS: {
    name: 'Omnibus',
    img: omnibusRankImg,
  },
}

const DashboardView = () => {
  const [currentRank, setCurrentRank] = useState(null)
  const [currentRankImg, setCurrentRankImg] = useState(null)

  const rank = 3 //! PLACEHOLDER

  useEffect(() => {
    const ranksArr = Object.entries(ranks)
    const name = ranksArr[rank][1].name
    const img = ranksArr[rank][1].img

    setCurrentRank(name)
    setCurrentRankImg(img)
  }, [])

  return (
    <Wrapper>
      <UserStats>
        <RankWrapper>
          <img src={currentRankImg} alt='rank' />
          <span>
            Ranga {rank + 1}: {currentRank}
          </span>
        </RankWrapper>
        <ProgressInfo />
      </UserStats>
      <Games>
        <GameModes />
        <LastGames />
      </Games>
    </Wrapper>
  )
}

export default DashboardView

import React, { useState, useEffect } from 'react'
import {
  GameModes,
  Games,
  LastGames,
  LevelBar,
  LevelFiller,
  LevelStats,
  LevelWrapper,
  RankWrapper,
  Stats,
  UserStats,
  Wrapper,
} from 'components/Profile/Views/DashboardView/DashboardView.styles'
import copperRankImg from 'assets/ranks/copper.png'
import silverRankImg from 'assets/ranks/silver.png'
import goldRankImg from 'assets/ranks/gold.png'
import titaniumRankImg from 'assets/ranks/titanium.png'
import uraniumRankImg from 'assets/ranks/uranium.png'
import platinumRankImg from 'assets/ranks/platinum.png'
import omnibusRankImg from 'assets/bus-big.png'
import moment from 'moment/moment'
import 'moment/locale/pl'

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
  const [currentRankColor, setCurrentRankColor] = useState(null)
  const [currentRankImg, setCurrentRankImg] = useState(null)

  //! PLACEHOLDERS BEGIN

  const rank = 6
  const level = 1

  const highestScore = 1337
  const favSubject = 'PROGRAMOWANIE'
  const lastPlay = Date.now() - 1000000000

  //! PLACEHOLDERS END

  moment.locale('pl')

  useEffect(() => {
    const ranksArr = Object.entries(ranks)
    const name = ranksArr[rank][1].name
    const img = ranksArr[rank][1].img
    const color = ranksArr[rank][1].color

    setCurrentRank(name)
    setCurrentRankImg(img)
    setCurrentRankColor(color)
  }, [])

  return (
    <Wrapper>
      <UserStats>
        <RankWrapper>
          <img src={currentRankImg} alt='rank' />
          <span style={{ color: currentRankColor }}>
            Ranga {rank + 1}: {currentRank}
          </span>
        </RankWrapper>
        <LevelWrapper>
          <span>Poziom {level}</span>
          <LevelStats>
            <LevelBar>
              <LevelFiller progress={41} />
            </LevelBar>
            <Stats>
              <div className='highest-score'>
                <span className='text'>NAJWYŻSZY WYNIK</span>
                <span className='subtext'>{highestScore}</span>
              </div>
              <div className='fav-subject'>
                <span className='text'>ULUBIONY PRZEDMIOT</span>
                <span className='subtext'>{favSubject}</span>
              </div>
              <div className='last-game'>
                <span className='text'>OSTATNIA GRA</span>
                <span className='subtext'>{moment(lastPlay).fromNow().toUpperCase()}</span>
              </div>
            </Stats>
          </LevelStats>
        </LevelWrapper>
      </UserStats>
      <Games>
        <GameModes />
        <LastGames />
      </Games>
    </Wrapper>
  )
}

export default DashboardView

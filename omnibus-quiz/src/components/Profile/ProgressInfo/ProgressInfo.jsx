import React from 'react'
import {
  LevelBar,
  LevelFiller,
  LevelStats,
  Stats,
  Wrapper,
} from '@/components/Profile/ProgressInfo/ProgressInfo.styles'
import moment from 'moment/moment'
import 'moment/locale/pl'
import { useContext } from 'react'
import { GameContext } from '@/providers/GameProvider'
import { AuthContext } from '@/providers/AuthProvider'

const ProgressInfo = () => {
  const { lastGameInfo } = useContext(GameContext)
  const { mongoUser } = useContext(AuthContext)

  //! PLACEHOLDERS BEGIN

  const level = 1

  const highestScore = 1337
  const favSubject = 'PROGRAMOWANIE'

  //! PLACEHOLDERS END

  moment.locale('pl')

  const getLastPlay = (time) => moment(Number(time)).fromNow().toUpperCase()

  return (
    <Wrapper>
      <span>Poziom {level}</span>
      <LevelStats>
        <LevelBar>
          <LevelFiller progress={41} />
        </LevelBar>
        <Stats>
          <div className='highest-score'>
            <span className='text'>CAŁKOWITY WYNIK</span>
            <span className='subtext'>
              {mongoUser && mongoUser.totalScore !== 0 ? mongoUser.totalScore : 'N/A'}
            </span>
          </div>
          <div className='fav-subject'>
            <span className='text'>ULUBIONY PRZEDMIOT</span>
            <span className='subtext'>
              {mongoUser && mongoUser.favSubject ? mongoUser.favSubject.toUpperCase() : 'N/A'}
            </span>
          </div>
          <div className='last-game'>
            <span className='text'>OSTATNIA GRA</span>
            <span className='subtext'>
              {lastGameInfo && lastGameInfo.date !== 'N/A' ? getLastPlay(lastGameInfo.date) : 'N/A'}
            </span>
          </div>
        </Stats>
      </LevelStats>
    </Wrapper>
  )
}

export default ProgressInfo

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
  const {
    mongoUser,
    mongoUser: { exp, neededExp, totalScore, favSubject },
  } = useContext(AuthContext)

  moment.locale('pl')

  const getLastPlay = (time) => moment(Number(time)).fromNow().toUpperCase()

  return (
    <Wrapper>
      <span>Poziom {mongoUser && mongoUser.level ? mongoUser.level : 'N/A'}</span>
      <span className='exp'>
        {mongoUser && exp !== null && neededExp ? `${exp} / ${neededExp} EXP` : `N/A`}
      </span>
      <LevelStats>
        <LevelBar>
          <LevelFiller progress={41} />
        </LevelBar>
        <Stats>
          <div className='highest-score'>
            <span className='text'>CAŁKOWITY WYNIK</span>
            <span className='subtext'>{mongoUser && totalScore !== 0 ? totalScore : 'N/A'}</span>
          </div>
          <div className='fav-subject'>
            <span className='text'>ULUBIONY PRZEDMIOT</span>
            <span className='subtext'>
              {mongoUser && favSubject ? favSubject.toUpperCase() : 'N/A'}
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

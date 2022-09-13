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

const ProgressInfo = () => {
  const { lastGameInfo } = useContext(GameContext)

  //! PLACEHOLDERS BEGIN

  const level = 1

  const highestScore = 1337
  const favSubject = 'PROGRAMOWANIE'

  //! PLACEHOLDERS END

  moment.locale('pl')

  const getLastPlay = (time) => moment(time).fromNow().toUpperCase()

  return (
    <Wrapper>
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
            <span className='subtext'>{favSubject.toUpperCase()}</span>
          </div>
          <div className='last-game'>
            <span className='text'>OSTATNIA GRA</span>
            <span className='subtext'>
              {lastGameInfo && lastGameInfo.gDate ? getLastPlay(lastGameInfo.gDate) : 'N/A'}
            </span>
          </div>
        </Stats>
      </LevelStats>
    </Wrapper>
  )
}

export default ProgressInfo

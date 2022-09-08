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

const ProgressInfo = () => {
  //! PLACEHOLDERS BEGIN

  const level = 1

  const highestScore = 1337
  const favSubject = 'PROGRAMOWANIE'
  const lastPlay = Date.now() - 1000000000

  //! PLACEHOLDERS END

  moment.locale('pl')

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
            <span className='subtext'>{favSubject}</span>
          </div>
          <div className='last-game'>
            <span className='text'>OSTATNIA GRA</span>
            <span className='subtext'>{moment(lastPlay).fromNow().toUpperCase()}</span>
          </div>
        </Stats>
      </LevelStats>
    </Wrapper>
  )
}

export default ProgressInfo

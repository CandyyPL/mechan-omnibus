import {
  StatsElement,
  StatsWrapper,
  Title,
  Wrapper,
} from '@/components/Profile/LastGameInfo/LastGameInfo.styles'
import { GameContext } from '@/providers/GameProvider'
import React from 'react'
import { useContext } from 'react'

const LastGameInfo = () => {
  const { lastGameInfo } = useContext(GameContext)

  return (
    <Wrapper>
      <Title>OSTATNIA GRA</Title>
      <StatsWrapper>
        <StatsElement className='subject'>
          <span className='subtext'>
            {lastGameInfo && lastGameInfo.subject ? lastGameInfo.subject.toUpperCase() : 'N/A'}
          </span>
          <span className='text'>PRZEDMIOT</span>
        </StatsElement>
        <StatsElement className='subject'>
          <span className='subtext'>
            {lastGameInfo && lastGameInfo.answers ? `${lastGameInfo.answers} na 10` : 'N/A'}
          </span>
          <span className='text'>POPRAWNE ODPOWIEDZI</span>
        </StatsElement>
        <StatsElement className='score'>
          <span className='subtext'>
            {lastGameInfo && lastGameInfo.score ? lastGameInfo.score : 'N/A'}
          </span>
          <span className='text'>WYNIK</span>
        </StatsElement>
      </StatsWrapper>
    </Wrapper>
  )
}

export default LastGameInfo

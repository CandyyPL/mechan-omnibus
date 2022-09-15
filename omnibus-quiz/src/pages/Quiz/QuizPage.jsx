import { Wrapper } from '@/pages/Quiz/QuizPage.styles'
import { GameContext } from '@/providers/GameProvider'
import React from 'react'
import { useContext } from 'react'

const QuizPage = () => {
  document.title = 'Omnibus - Play'

  const { gameInfo } = useContext(GameContext)

  return (
    <Wrapper>
      {gameInfo.gid}
      {gameInfo.gDate}
    </Wrapper>
  )
}

export default QuizPage

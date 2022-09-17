import React from 'react'
import { useContext } from 'react'
import { GameContext } from '@/providers/GameProvider'
import { gameModes } from '@/helpers/consts'
import QuizClassic from '@/pages/Quiz/Classic/QuizClassic'

const QuizPage = () => {
  document.title = 'Omnibus - Play'

  const { chosenGamemode } = useContext(GameContext)

  switch (chosenGamemode) {
    case gameModes.CLASSIC:
      return <QuizClassic />
  }
}

export default QuizPage

import React from 'react'
import { useContext } from 'react'
import { GameContext } from '@/providers/GameProvider'
import { gameModes } from '@/helpers/consts'
import QuizClassic from '@/pages/Quiz/Classic/QuizClassic'
import { Navigate } from 'react-router-dom'

const QuizPage = () => {
  document.title = 'Omnibus - Play'

  const { chosenGamemode, gameInfo } = useContext(GameContext)

  if (gameInfo.gid !== null && gameInfo.gid !== undefined && gameInfo.gid === '')
    return <Navigate to='/' />

  switch (chosenGamemode) {
    case gameModes.CLASSIC:
      return <QuizClassic />
  }
}

export default QuizPage

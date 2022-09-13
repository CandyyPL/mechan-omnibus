import { getData } from '@/auth/dbMethods'
import Loading from '@/pages/Loading/Loading'
import { AuthContext } from '@/providers/AuthProvider'
import { useQuery } from 'graphql-hooks'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { v4 } from 'uuid'

export const GameContext = createContext({})

const gameInitialState = {
  gid: 0,
  gDate: 0,
  category: '',
  correctAnswers: 0,
  questionsDone: 0,
  score: 0,
}

const GameProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext)

  const [gameLoading, setGameLoading] = useState(false)

  const [gameInfo, setGameInfo] = useState(gameInitialState)
  const [lastGameInfo, setLastGameInfo] = useState(gameInitialState)

  const [questions, setQuestions] = useState([])

  const [gameError, setGameError] = useState(null)

  const questionsQuery = `query Questions {
    allQuestiongroups(filter: { group: { eq: "math" } }) {
      group
      questions {
        id
        questiontitle
        questionanswers {
          id
          answer
        }
      }
    }
  }`

  const { loading, error, data } = useQuery(questionsQuery)

  useEffect(() => {
    if (data) {
      setQuestions(data.allQuestiongroups[0].questions)
      setGameLoading(false)
    }
  }, [data])

  // useEffect(() => {
  //   getData(currentUser.uid).then((snap) => {})
  // })

  const initGame = () => {
    setGid(v4())
    setGDate(Date.now())
  }

  const provide = {
    initGame,
    gameInfo,
    setGameInfo,
    questions,
    setQuestions,
    gameError,
    setGameError,
    lastGameInfo,
  }

  return (
    <GameContext.Provider value={provide}>
      {gameLoading || loading ? <Loading /> : children}
    </GameContext.Provider>
  )
}

export default GameProvider

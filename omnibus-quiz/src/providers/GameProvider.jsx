import { getData } from '@/auth/dbMethods'
import Loading from '@/pages/Loading/Loading'
import { AuthContext } from '@/providers/AuthProvider'
import { useQuery, useManualQuery } from 'graphql-hooks'
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

  const [chosenCategory, setChosenCategory] = useState('')
  const [questions, setQuestions] = useState([])
  const [questionGroups, setQuestionGroups] = useState([])

  const [gameError, setGameError] = useState(null)

  const constructQuery = (category = null) => {
    const filter = category === null ? '' : `(filter: { group: { eq: "${category}" } })`

    return `
      query Questions {
        allQuestiongroups${filter} {
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
  }

  const groupsQuery = `
    query Questions {
      allQuestiongroups {
        group
      }
    }`

  const [getQuestions, { loading: questionsLoading, data: questionsData }] = useManualQuery(
    constructQuery(chosenCategory)
  )

  const { loading: groupsLoading, data: groupsData } = useQuery(groupsQuery)

  useEffect(() => {
    if (questionsData) {
      setQuestions(questionsData.allQuestiongroups[0].questions)
      setGameLoading(false)
    }
  }, [questionsData])

  useEffect(() => {
    if (groupsData) {
      let groupsArr = []
      // console.log(groupsData)
      groupsData.allQuestiongroups.forEach((obj) => groupsArr.push(obj.group))
      groupsArr.sort()
      setQuestionGroups(groupsArr)
    }
  }, [groupsData])

  // useEffect(() => {
  //   getData(currentUser.uid).then((snap) => {})
  // })

  const initGame = () => {
    setGameInfo({ ...gameInfo, gid: v4(), gDate: Date.now() })
  }

  const provide = {
    initGame,
    gameInfo,
    setGameInfo,
    questions,
    setQuestions,
    getQuestions,
    setChosenCategory,
    questionGroups,
    gameError,
    setGameError,
    lastGameInfo,
  }

  return (
    <GameContext.Provider value={provide}>
      {gameLoading || questionsLoading || groupsLoading ? <Loading /> : children}
    </GameContext.Provider>
  )
}

export default GameProvider

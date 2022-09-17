import { getData } from '@/db/dbMethods'
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
  score: 0,
}

const GameProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext)

  // const [gameLoading, setGameLoading] = useState(false)

  const [gameInfo, setGameInfo] = useState(gameInitialState)
  const [lastGameInfo, setLastGameInfo] = useState({})

  const [chosenGamemode, setChosenGamemode] = useState(sessionStorage.getItem('gamemode') || '')
  const [chosenCategory, setChosenCategory] = useState(sessionStorage.getItem('category') || '')
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
              answerid
            }
            correctanswerid
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

  const [getQuestions, { loading: questionsLoading }] = useManualQuery(
    constructQuery(chosenCategory)
  )

  const { loading: groupsLoading, data: groupsData } = useQuery(groupsQuery)

  useEffect(() => {
    if (groupsData) {
      let groupsArr = []
      groupsData.allQuestiongroups.forEach((obj) => groupsArr.push(obj.group))
      groupsArr.sort()
      setQuestionGroups(groupsArr)
    }
  }, [groupsData])

  useEffect(() => {
    if (currentUser) {
      getData(currentUser.uid).then((res) => {
        const lastGame = res.data.user.lastGame
        setLastGameInfo(lastGame)
      })
    }
  }, [])

  useEffect(() => {
    setLastGameInfo({
      subject: gameInfo.category,
      answers: gameInfo.correctAnswers,
      score: gameInfo.score,
    })
  }, [gameInfo])

  const initGame = () => {
    const newInfo = { gid: v4(), gDate: Date.now(), category: chosenCategory }
    setGameInfo({ ...gameInfo, ...newInfo })
  }

  const provide = {
    initGame,
    gameInfo,
    setGameInfo,
    questions,
    setQuestions,
    getQuestions,
    chosenGamemode,
    setChosenGamemode,
    chosenCategory,
    setChosenCategory,
    questionGroups,
    gameError,
    setGameError,
    lastGameInfo,
    setLastGameInfo,
  }

  return (
    <GameContext.Provider value={provide}>
      {questionsLoading || groupsLoading ? <Loading /> : children}
    </GameContext.Provider>
  )
}

export default GameProvider

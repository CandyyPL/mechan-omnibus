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

export const gameInitialState = {
  gid: '',
  gDate: 0,
  category: '',
  correctAnswers: 0,
  score: 0,
}

const GameProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext)

  const [gameLoading, setGameLoading] = useState(false)

  const [gameInfo, setGameInfo] = useState(
    JSON.parse(localStorage.getItem('gameInfo')) || gameInitialState
  )
  const [lastGameInfo, setLastGameInfo] = useState({})

  const [chosenGamemode, setChosenGamemode] = useState(localStorage.getItem('gamemode') || '')
  const [chosenCategory, setChosenCategory] = useState(localStorage.getItem('category') || '')
  const [questions, setQuestions] = useState([])
  const [questionsIdx, setQuestionsIdx] = useState([])
  const [answers, setAnswers] = useState([])
  const [questionGroups, setQuestionGroups] = useState([])

  const [gameError, setGameError] = useState(null)

  const constructQuery = (category = null) => {
    const filter = category === null ? '' : `(filter: { questiongroup: { eq: "${category}" } })`

    const temp = `OR: [
      { questionid: { eq: ${questionsIdx[0]} } },
      { questionid: { eq: ${questionsIdx[1]} } },
      { questionid: { eq: ${questionsIdx[2]} } },
      { questionid: { eq: ${questionsIdx[3]} } },
      { questionid: { eq: ${questionsIdx[4]} } },
      { questionid: { eq: ${questionsIdx[5]} } },
      { questionid: { eq: ${questionsIdx[6]} } },
      { questionid: { eq: ${questionsIdx[7]} } },
      { questionid: { eq: ${questionsIdx[8]} } },
      { questionid: { eq: ${questionsIdx[9]} } }
    ]`

    return `
      query Questions {
        allQuestions${filter} {
          questionid
          questiongroup
          questiontitle
          questionimage {
            url
          }
          questionanswers {
            answer
            answerid
          }
          correctid
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
    if (questions === null || questions === []) setGameLoading(true)
    if (questions !== null && questions.length > 0) setGameLoading(false)
  }, [questions])

  useEffect(() => {
    const sessionGameInfo = localStorage.getItem('gameInfo')

    if (sessionGameInfo !== 'undefined' && sessionGameInfo !== null) {
      setGameInfo(JSON.parse(sessionGameInfo))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('gameInfo', JSON.stringify(gameInfo))
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
    answers,
    setAnswers,
  }

  return (
    <GameContext.Provider value={provide}>
      {gameLoading || questionsLoading || groupsLoading ? <Loading /> : children}
    </GameContext.Provider>
  )
}

export default GameProvider

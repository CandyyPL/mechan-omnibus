import Loading from '@/pages/Loading/Loading'
import { GameContext } from '@/providers/GameProvider'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import busImg from '@/assets/bus-small.png'
import {
  QuestionsAnswers,
  QuestionWrapper,
  QuizTopbar,
  Wrapper,
} from '@/pages/Quiz/Classic/QuizClassic.styles'
import { useNavigate } from 'react-router-dom'

const QuizClassic = () => {
  const { chosenCategory, questions, setGameInfo, gameInfo } = useContext(GameContext)
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [qid, setQid] = useState(0)

  const [answers, setAnswers] = useState([])

  const [answerDisabled, setAnswerDisabled] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const sessionQuestion = localStorage.getItem('currentQuestion')

    if (sessionQuestion === 'undefined' || sessionQuestion === null) {
      setCurrentQuestion(questions[qid])
      localStorage.setItem('currentQuestion', JSON.stringify(questions[qid]))
    } else {
      setCurrentQuestion(JSON.parse(sessionQuestion))
    }
  }, [])

  useEffect(() => {
    if (questions.length !== 0 && qid == questions.length) {
      setGameInfo((prev) => {
        const correct = answers.filter((val) => val === true).length
        const newInfo = { correctAnswers: correct }
        return { ...prev, ...newInfo }
      })

      localStorage.clear()
      navigate('/')
    } else if (questions.length !== 0) {
      setGameInfo((prev) => {
        const newScore = answers[answers.length - 1] ? gameInfo.score + 500 * qid : gameInfo.score
        const newInfo = { score: newScore }
        return { ...prev, ...newInfo }
      })

      setCurrentQuestion(questions[qid])
      localStorage.setItem('currentQuestion', JSON.stringify(questions[qid]))
      setAnswerDisabled(false)
    }
  }, [qid])

  const handleMakeAnswer = (id) => {
    if (id === currentQuestion.correctanswerid) {
      setAnswers([...answers, true])
      setQid((prev) => prev + 1)
    } else {
      setAnswers([...answers, false])
      setQid((prev) => prev + 1)
    }

    setAnswerDisabled(true)
  }

  return (
    <>
      {currentQuestion !== null ? (
        <Wrapper>
          <QuizTopbar>
            <span>Klasyczny</span>
            <span>
              <img src={busImg} alt='bus' />
              OMNIBUS
              <img src={busImg} alt='bus' />
            </span>
            <span>{chosenCategory}</span>
          </QuizTopbar>
          <QuestionWrapper>
            <span className='title'>
              {currentQuestion.questiontitle !== null && currentQuestion.questiontitle}
            </span>
            <QuestionsAnswers>
              {currentQuestion.questionanswers &&
                currentQuestion.questionanswers.map((ans, idx) => (
                  <button
                    className='answer'
                    disabled={answerDisabled}
                    key={idx}
                    onClick={(e) => handleMakeAnswer(ans.answerid)}>
                    {ans.answer}
                  </button>
                ))}
            </QuestionsAnswers>
          </QuestionWrapper>
        </Wrapper>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default QuizClassic

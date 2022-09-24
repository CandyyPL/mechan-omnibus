import Loading from '@/pages/Loading/Loading'
import { GameContext } from '@/providers/GameProvider'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { QuestionsAnswers, QuestionWrapper, Wrapper } from '@/pages/Quiz/Classic/QuizClassic.styles'
import { useNavigate } from 'react-router-dom'
import QuizTopbar from '@/pages/Quiz/Topbar/QuizTopbar'

const QuizClassic = () => {
  const { chosenGamemode, chosenCategory, questions, setGameInfo, gameInfo, answers, setAnswers } =
    useContext(GameContext)
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [qid, setQid] = useState(0)

  const [answerDisabled, setAnswerDisabled] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const sessionQuestion = localStorage.getItem('currentQuestion')
    const storageAnswers = localStorage.getItem('answers')
    const storageQuestions = localStorage.getItem('questions')

    if (sessionQuestion === 'undefined' || sessionQuestion === null) {
      setCurrentQuestion(questions[qid])
      localStorage.setItem('currentQuestion', JSON.stringify(questions[qid]))
    } else {
      setCurrentQuestion(JSON.parse(sessionQuestion))
    }

    if (storageAnswers === 'undefined' || storageAnswers === null) {
      localStorage.setItem('answers', JSON.stringify(answers))
    }

    if (storageQuestions === 'undefined' || storageQuestions === null) {
      localStorage.setItem('questions', JSON.stringify(questions))
    }

    if (answers.length === 0) setAnswers(JSON.parse(storageAnswers))
    if (questions.length === 0) setQuestions(JSON.parse(storageQuestions))
  }, [])

  useEffect(() => {
    if (questions.length !== 0 && answers.length !== 0) {
      setGameInfo((prev) => {
        const newScore = answers[answers.length - 1][1] ? gameInfo.score + 500 : gameInfo.score
        const newInfo = { score: newScore }
        return { ...prev, ...newInfo }
      })

      if (qid == questions.length) {
        setGameInfo((prev) => {
          const correct = answers.filter((innerArr) => innerArr[1] === true).length
          const newInfo = { correctAnswers: correct }
          return { ...prev, ...newInfo }
        })

        navigate('/play/summary')
      } else if (qid < questions.length) {
        setCurrentQuestion(questions[qid])
        localStorage.setItem('currentQuestion', JSON.stringify(questions[qid]))
        setAnswerDisabled(false)
      }
    }
  }, [qid])

  const handleMakeAnswer = (id) => {
    if (id === currentQuestion.correctanswerid) {
      setAnswers([...answers, [id, true]])
      setQid((prev) => prev + 1)
    } else {
      setAnswers([...answers, [id, false]])
      setQid((prev) => prev + 1)
    }

    setAnswerDisabled(true)
  }

  return (
    <>
      {currentQuestion !== null ? (
        <Wrapper>
          <QuizTopbar mode={chosenGamemode} category={chosenCategory} />
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

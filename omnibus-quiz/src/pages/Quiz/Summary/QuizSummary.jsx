import React, { useContext } from 'react'
import { GameContext } from '@/providers/GameProvider'
import { Navigate, useNavigate } from 'react-router-dom'
import {
  BackButton,
  DetailedAnswers,
  QuestionInfo,
  QuickAnswers,
  Title,
  Wrapper,
} from '@/pages/Quiz/Summary/QuizSummary.styles'
import QuizTopbar from '@/pages/Quiz/Topbar/QuizTopbar'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { AuthContext } from '@/providers/AuthProvider'

const QuizSummary = () => {
  document.title = 'Omnibus - Podsumowanie'

  const { chosenGamemode, chosenCategory, gameInfo, answers, setAnswers, questions, setQuestions } =
    useContext(GameContext)

  const { currentUser } = useContext(AuthContext)

  const [cwAnswers, setCwAnswers] = useState([])

  if (gameInfo.gid !== null && gameInfo.gid !== undefined && gameInfo.gid === '')
    return <Navigate to='/profile' />

  useEffect(() => {
    const storageAnswers = localStorage.getItem('answers')
    const storageQuestions = localStorage.getItem('questions')

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
    const correctAnswers = answers.filter((innerArr) => innerArr[1] === true).length
    const wrongAnswers = answers.filter((innerArr) => innerArr[1] === false).length

    setCwAnswers([correctAnswers, wrongAnswers])
  }, [answers])

  useEffect(() => {
    if (cwAnswers !== []) {
      axios
        .post('http://localhost:5000/savegame', {
          uid: currentUser.uid,
          game: {
            date: gameInfo.gDate,
            score: gameInfo.score,
            answers: cwAnswers[0],
            subject: chosenCategory,
          },
        })
        .then((res) => {})
    }
  }, [cwAnswers])

  const getAnswerText = (answerCount, answer) => {
    if (answer === true) {
      if (answerCount === 1) return `${answerCount} poprawna odpowiedź`
      else if ([2, 3, 4].includes(answerCount)) return `${answerCount} poprawne odpowiedź`
      else return `${answerCount} poprawnych odpowiedź`
    }

    if (answer === false) {
      if (answerCount === 1) return `${answerCount} błędna odpowiedź`
      else if ([2, 3, 4].includes(answerCount)) return `${answerCount} błędne odpowiedź`
      else return `${answerCount} błędnych odpowiedź`
    }
  }

  const navigate = useNavigate()

  const handleReturn = () => {
    localStorage.clear()
    setAnswers([])
    navigate('/profile')
  }

  return (
    <Wrapper>
      <QuizTopbar mode={chosenGamemode} category={chosenCategory} />
      <Title>PODSUMOWANIE</Title>
      <QuickAnswers>
        <span className='correct'>{getAnswerText(cwAnswers[0], true)}</span>
        <span className='wrong'>{getAnswerText(cwAnswers[1], false)}</span>
      </QuickAnswers>
      <BackButton onClick={handleReturn}>POWRÓT DO PROFILU</BackButton>
      <DetailedAnswers>
        {questions.length &&
          questions.map((q, idx) => (
            <QuestionInfo key={idx}>
              <span className='qtitle'>{q.questiontitle}</span>
              {answers[idx][1] === true ? (
                <span className='answers correct'>
                  Twoja odpowiedź: {q.questionanswers[answers[idx][0]].answer}
                </span>
              ) : (
                <span className='answers'>
                  <span className='wrong'>
                    Twoja odpowiedź: {q.questionanswers[answers[idx][0]].answer}
                  </span>
                  <span className='correct'>
                    Poprawna odpowiedź: {q.questionanswers[q.correctid].answer}
                  </span>
                </span>
              )}
            </QuestionInfo>
          ))}
      </DetailedAnswers>
    </Wrapper>
  )
}

export default QuizSummary

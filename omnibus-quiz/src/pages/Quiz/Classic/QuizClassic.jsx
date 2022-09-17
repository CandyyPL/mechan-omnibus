import Loading from '@/pages/Loading/Loading'
import {
  QuestionsAnswers,
  QuestionWrapper,
  QuizTopbar,
  Wrapper,
} from '@/pages/Quiz/Classic/QuizClassic.styles'
import { GameContext } from '@/providers/GameProvider'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'

const QuizClassic = () => {
  const { chosenCategory, questions } = useContext(GameContext)
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [qid, setQid] = useState(0)

  useEffect(() => {
    const sessionQuestion = sessionStorage.getItem('currentQuestion')

    if (sessionQuestion === 'undefined' || sessionQuestion === null) {
      setCurrentQuestion(questions[qid])
      sessionStorage.setItem('currentQuestion', JSON.stringify(questions[qid]))
    } else {
      setCurrentQuestion(JSON.parse(sessionQuestion))
    }
  }, [])

  const handleMakeAnswer = (id) => {
    if (id === currentQuestion.correctanswerid) console.log('Success')
    else console.log('Fail')
  }

  return (
    <>
      {currentQuestion !== null ? (
        <Wrapper>
          <QuizTopbar>
            <span>Klasyczny</span>
            <span>{chosenCategory}</span>
          </QuizTopbar>
          <QuestionWrapper>
            <span className='title'>
              {currentQuestion.questiontitle !== null && currentQuestion.questiontitle}
            </span>
            <QuestionsAnswers>
              {currentQuestion.questionanswers &&
                currentQuestion.questionanswers.map((ans, idx) => (
                  <div className='answer' key={idx} onClick={() => handleMakeAnswer(ans.answerid)}>
                    {ans.answer}
                  </div>
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

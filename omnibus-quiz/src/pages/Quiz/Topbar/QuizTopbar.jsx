import React from 'react'
import { Wrapper } from '@/pages/Quiz/Topbar/QuizTopbar.styles'
import busImg from '@/assets/bus-small.png'

const QuizTopbar = ({ mode, category }) => {
  return (
    <Wrapper>
      <span className='mode'>{mode}</span>
      <span>
        <img src={busImg} alt='bus' />
        OMNIBUS
        <img src={busImg} alt='bus' />
      </span>
      <span className='category'>{category}</span>
    </Wrapper>
  )
}

export default QuizTopbar

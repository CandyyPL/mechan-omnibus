import React from 'react'
import { ErrorWrapper } from '@/pages/Error/Error.styles'
import errorImg from '@/assets/error.png'

const ErrorDisplay = () => {
  return (
    <ErrorWrapper>
      <img src={errorImg} alt='error' />
      <h1>Wystąpił błąd</h1>
      <h3>Przepraszamy za utrudnienia</h3>
    </ErrorWrapper>
  )
}

export default ErrorDisplay

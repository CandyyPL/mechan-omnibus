import React from 'react'
import { BusWithWarning, JoinWrapper, Wrapper } from 'components/JoinPart/JoinPart.styles'
import JoinForm from 'components/JoinForm/JoinForm'

const JoinPart = () => {
  return (
    <Wrapper>
      <JoinWrapper>
        <JoinForm />
      </JoinWrapper>
      <BusWithWarning></BusWithWarning>
    </Wrapper>
  )
}

export default JoinPart

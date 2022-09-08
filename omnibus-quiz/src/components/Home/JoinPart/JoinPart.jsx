import React from 'react'
import {
  BusWithWarning,
  JoinWrapper,
  UserDataWarning,
  Wrapper,
} from '@/components/Home/JoinPart/JoinPart.styles'
import JoinForm from '@/components/Home/JoinForm/JoinForm'
import busImg from '@/assets/bus-big.png'
import excImg from '@/assets/danger.png'

const JoinPart = () => {
  return (
    <Wrapper>
      <JoinWrapper>
        <JoinForm />
      </JoinWrapper>
      <BusWithWarning>
        <img className='bus' src={busImg} alt='bus' />
        <UserDataWarning>
          <span>
            Pamiętaj, aby podane przez ciebie dane były prawdziwe! W przypadku podania
            nieprawdziwych danych, odbiór ewentualnych nagród może być niemożliwy, a twoje konto
            może zostać usunięte!
          </span>
          <img className='danger' src={excImg} alt='danger' />
        </UserDataWarning>
      </BusWithWarning>
    </Wrapper>
  )
}

export default JoinPart

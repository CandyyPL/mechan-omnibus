import { LeftSide, Login, Logo, Options, Wrapper } from '@/components/TopbarMenu/TopbarMenu.styles'
import { FC } from 'react'
// import loginImg from '@/assets/login.png'
import busImg from '@/assets/bus.png'

const TopbarMenu: FC = () => {
  return (
    <Wrapper>
      <LeftSide></LeftSide>
      <Logo>
        <img className='left' src={busImg} alt='bus' />
        OMNIBUS
        <img className='right' src={busImg} alt='bus' />
      </Logo>
      <Options>{/* <Login>Login</Login> */}</Options>
    </Wrapper>
  )
}

export default TopbarMenu

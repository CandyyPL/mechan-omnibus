import React from 'react'
import { TopbarStats, Wrapper } from '@/components/Profile/ProfileTopbar/ProfileTopbar.styles'
import streakColorImg from '@/assets/fire-color.png'
import streakBlackImg from '@/assets/fire-black.png'
import tireImg from '@/assets/tire.png'
import boyImg from '@/assets/boy.png'
import girlImg from '@/assets/girl.png'

const ProfileTopbar = () => {
  return (
    <Wrapper>
      <TopbarStats className='item'>
        <img src={streakColorImg} alt='streak' />
        <span>14</span>
      </TopbarStats>
      <TopbarStats className='item'>
        <img src={tireImg} alt='tires' />
        <span>6</span>
      </TopbarStats>
      <TopbarStats className='avatar'>
        {/* <span>Candyy</span> */}
        <img className='avatar' src={boyImg} alt='avatar' />
      </TopbarStats>
    </Wrapper>
  )
}

export default ProfileTopbar

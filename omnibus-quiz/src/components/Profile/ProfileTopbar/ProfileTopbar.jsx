import React, { useContext } from 'react'
import { TopbarStats, Wrapper } from '@/components/Profile/ProfileTopbar/ProfileTopbar.styles'
import streakColorImg from '@/assets/fire-color.png'
import streakBlackImg from '@/assets/fire-black.png'
import tireImg from '@/assets/tire.png'
import { AuthContext } from '@/providers/AuthProvider'

const ProfileTopbar = () => {
  const { mongoUser } = useContext(AuthContext)

  return (
    <Wrapper>
      <div className='left'>
        {mongoUser && mongoUser.name && (
          <span>
            Zalogowano jako <span style={{ fontWeight: 'bold' }}>{mongoUser.name}</span>
            {mongoUser && mongoUser.username && `(${mongoUser.username})`}
          </span>
        )}
      </div>
      <div className='right'>
        {/* <TopbarStats className='item'>
          <img src={streakColorImg} alt='streak' />
          <span>14</span>
        </TopbarStats>
        <TopbarStats className='item'>
          <img src={tireImg} alt='tires' />
          <span>6</span>
        </TopbarStats> */}
      </div>
    </Wrapper>
  )
}

export default ProfileTopbar

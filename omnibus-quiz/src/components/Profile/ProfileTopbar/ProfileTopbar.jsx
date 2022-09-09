import React, { useContext } from 'react'
import { TopbarStats, Wrapper } from '@/components/Profile/ProfileTopbar/ProfileTopbar.styles'
import streakColorImg from '@/assets/fire-color.png'
import streakBlackImg from '@/assets/fire-black.png'
import tireImg from '@/assets/tire.png'
import { AuthContext } from '@/providers/AuthProvider'

const ProfileTopbar = () => {
  const { dbSnap } = useContext(AuthContext)

  return (
    <Wrapper>
      <div className='left'>
        {dbSnap && dbSnap.name && dbSnap.username && (
          <span>
            Zalogowano jako <span style={{ fontWeight: 'bold' }}>{dbSnap.name}</span> (
            {dbSnap.username})
          </span>
        )}
      </div>
      <div className='right'>
        <TopbarStats className='item'>
          <img src={streakColorImg} alt='streak' />
          <span>14</span>
        </TopbarStats>
        <TopbarStats className='item'>
          <img src={tireImg} alt='tires' />
          <span>6</span>
        </TopbarStats>
      </div>
    </Wrapper>
  )
}

export default ProfileTopbar

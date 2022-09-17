import { Wrapper } from '@/components/Profile/Achievements/Achievements.styles'
import React from 'react'

const Achievements = () => {
  return (
    <Wrapper>
      <div className='achv'>
        <img src='https://via.placeholder.com/512x512' alt='' />
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
      <div className='achv'>
        <img src='https://via.placeholder.com/512x512' alt='' />
        <span>Lorem, ipsum.</span>
      </div>
      <div className='achv'>
        <img src='https://via.placeholder.com/512x512' alt='' />
        <span>Lorem, ipsum dolor.</span>
      </div>
    </Wrapper>
  )
}

export default Achievements

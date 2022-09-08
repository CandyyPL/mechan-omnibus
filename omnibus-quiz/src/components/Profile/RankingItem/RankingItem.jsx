import React, { useEffect, useState } from 'react'
import { UserData, UserStat, Wrapper } from '@/components/Profile/RankingItem/RankingItem.styles'
import goldMedalImg from '@/assets/gold-medal.png'
import silverMedalImg from '@/assets/silver-medal.png'
import bronzeMedalImg from '@/assets/bronze-medal.png'

const RankingItem = ({ item }) => {
  const [userMedal, setUserMedal] = useState(null)

  useEffect(() => {
    if (item.ranking === 1) return setUserMedal(goldMedalImg)
    else if (item.ranking === 2) return setUserMedal(silverMedalImg)
    else if (item.ranking === 3) return setUserMedal(bronzeMedalImg)
  }, [])

  return (
    <Wrapper>
      <UserData>
        {item.ranking < 4 ? (
          <span className='rank'>
            <img src={userMedal} alt='medal' />
          </span>
        ) : (
          <span className='rank'>{item.ranking}.</span>
        )}
        <span className='name'>{item.name}</span>
      </UserData>
      <div className='right'>
        <UserStat bgColor='#52d1dc'>{item.favSubject}</UserStat>
        <UserStat bgColor='#f3a712'>{item.score}</UserStat>
      </div>
    </Wrapper>
  )
}

export default RankingItem

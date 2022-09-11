import React, { useContext, useEffect, useState } from 'react'
import { UserData, UserStat, Wrapper } from '@/components/Profile/RankingItem/RankingItem.styles'
import goldMedalImg from '@/assets/gold-medal.png'
import silverMedalImg from '@/assets/silver-medal.png'
import bronzeMedalImg from '@/assets/bronze-medal.png'
import { AuthContext } from '@/providers/AuthProvider'
import useModal from '@/hooks/useModal'
import ModalBackground from '@/components/Modal/ModalBackground'
import { StyledModal } from '@/components/Profile/RankingItem/RankingItemModal.styles'

const RankingItem = ({ item }) => {
  const { currentUser } = useContext(AuthContext)

  const [userMedal, setUserMedal] = useState(null)
  const [itemStyle, setItemStyle] = useState(null)

  useEffect(() => {
    if (item.ranking === 1) return setUserMedal(goldMedalImg)
    else if (item.ranking === 2) return setUserMedal(silverMedalImg)
    else if (item.ranking === 3) return setUserMedal(bronzeMedalImg)
  }, [])

  useEffect(() => {
    if (currentUser.uid == item.id) {
      setItemStyle('owner')
    }
  }, [])

  const { isModalOpen, handleOpenModal } = useModal()

  return (
    <Wrapper owner={itemStyle} onClick={handleOpenModal}>
      {isModalOpen && (
        <ModalBackground>
          <StyledModal>
            <h1>User Details</h1>
            <h2>{item.name}</h2>
          </StyledModal>
        </ModalBackground>
      )}
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

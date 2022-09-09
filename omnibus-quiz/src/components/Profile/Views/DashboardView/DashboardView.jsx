import React, { useState, useEffect, useContext } from 'react'
import {
  GameModes,
  Games,
  LastGames,
  RankWrapper,
  UserStats,
  Wrapper,
} from '@/components/Profile/Views/DashboardView/DashboardView.styles'
import unrankedImg from '@/assets/ranks/unranked.png'
import copperRankImg from '@/assets/ranks/copper.png'
import silverRankImg from '@/assets/ranks/silver.png'
import goldRankImg from '@/assets/ranks/gold.png'
import titaniumRankImg from '@/assets/ranks/titanium.png'
import uraniumRankImg from '@/assets/ranks/uranium.png'
import platinumRankImg from '@/assets/ranks/platinum.png'
import omnibusRankImg from '@/assets/bus-big.png'
import ProgressInfo from '@/components/Profile/ProgressInfo/ProgressInfo'
import useModal from '@/hooks/useModal'
import Modal from '@/components/Profile/Views/DashboardView/Modal/Modal'
import { useForm } from 'react-hook-form'
import { writeData } from '@/auth/dbMethods'
import { AuthContext } from '@/providers/AuthProvider'

const ranks = {
  UNRANKED: {
    name: 'unranked',
    img: unrankedImg,
  },
  COPPER: {
    name: 'Miedź',
    img: copperRankImg,
  },
  SILVER: {
    name: 'Srebro',
    img: silverRankImg,
  },
  GOLD: {
    name: 'Złoto',
    img: goldRankImg,
  },
  TITANIUM: {
    name: 'Tytan',
    img: titaniumRankImg,
  },
  URANIUM: {
    name: 'Uran',
    img: uraniumRankImg,
  },
  PLATINUM: {
    name: 'Platyna',
    img: platinumRankImg,
  },
  OMNIBUS: {
    name: 'Omnibus',
    img: omnibusRankImg,
  },
}

const DashboardView = () => {
  const { currentUser, dbSnap } = useContext(AuthContext)

  const [currentRank, setCurrentRank] = useState(null)
  const [currentRankImg, setCurrentRankImg] = useState(null)

  const rank = 3 //! PLACEHOLDER

  useEffect(() => {
    const ranksArr = Object.entries(ranks)
    const name = ranksArr[rank][1].name
    const img = ranksArr[rank][1].img

    setCurrentRank(name)
    setCurrentRankImg(img)
  }, [])

  const { handleOpenModal, handleCloseModal, isModalOpen } = useModal()

  const { register, handleSubmit } = useForm()

  const handleSetUsername = async (data) => {
    await writeData({ username: data.username })
    handleCloseModal()
  }

  console.log('a')

  return (
    <Wrapper>
      {isModalOpen && (
        <Modal>
          <span>Ustaw nową nazwę użytkownika</span>
          <form onSubmit={handleSubmit(handleSetUsername)}>
            <input type='text' placeholder='Nowa nazwa' {...register('username')} />
            <button type='submit'>ZATWIERDŹ</button>
          </form>
        </Modal>
      )}
      <UserStats>
        <RankWrapper>
          <img src={currentRankImg} alt='rank' />
          {rank === 0 ? (
            <span>Poza rankingiem</span>
          ) : (
            <span>
              Ranga {rank}: {currentRank}
            </span>
          )}
        </RankWrapper>
        <ProgressInfo />
      </UserStats>
      <Games>
        <GameModes />
        <LastGames />
      </Games>
    </Wrapper>
  )
}

export default DashboardView

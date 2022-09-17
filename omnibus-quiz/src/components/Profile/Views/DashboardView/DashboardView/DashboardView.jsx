import React from 'react'
import {
  GameButtons,
  GameModes,
  GamesInfo,
  UserStats,
  Wrapper,
} from '@/components/Profile/Views/DashboardView/DashboardView/DashboardView.styles'
import ProgressInfo from '@/components/Profile/ProgressInfo/ProgressInfo'
import useModal from '@/hooks/useModal'
import RankInfo from '@/components/Profile/RankInfo/RankInfo'
import LastGameInfo from '@/components/Profile/LastGameInfo/LastGameInfo'
import Achievements from '@/components/Profile/Achievements/Achievements'
import GameModal from '@/components/Profile/Views/DashboardView/GameModal/GameModal'
import HistoryModal from '@/components/Profile/Views/DashboardView/HistoryModal/HistoryModal'
import { useEffect } from 'react'

const DashboardView = () => {
  document.title = 'Dashboard'

  // const { currentUser, mongoUser, getmongoUser } = useContext(AuthContext)

  const {
    isModalOpen: isHistoryModalOpen,
    handleOpenModal: handleOpenHistoryModal,
    handleCloseModal: handleCloseHistoryModal,
  } = useModal()

  const {
    isModalOpen: isGameModalOpen,
    handleOpenModal: handleOpenGameModal,
    handleCloseModal: handleCloseGameModal,
  } = useModal()

  useEffect(() => {
    sessionStorage.clear()
  }, [])

  return (
    <Wrapper>
      {isHistoryModalOpen && <HistoryModal closeModal={handleCloseHistoryModal} />}
      {isGameModalOpen && <GameModal closeModal={handleCloseGameModal} />}
      <UserStats>
        <RankInfo />
        <ProgressInfo />
      </UserStats>
      <GamesInfo>
        <GameModes>
          <GameButtons>
            <button className='play' onClick={handleOpenGameModal}>
              GRAJ
            </button>
            <button className='history' onClick={handleOpenHistoryModal}>
              HISTORIA GIER
            </button>
          </GameButtons>
          <LastGameInfo />
        </GameModes>
        <div className='separator' />
        <Achievements />
      </GamesInfo>
    </Wrapper>
  )
}

export default DashboardView

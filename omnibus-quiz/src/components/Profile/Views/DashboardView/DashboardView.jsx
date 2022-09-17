import React, { useContext } from 'react'
import {
  GameButtons,
  GameModes,
  GamesInfo,
  UserStats,
  Wrapper,
} from '@/components/Profile/Views/DashboardView/DashboardView.styles'
import ProgressInfo from '@/components/Profile/ProgressInfo/ProgressInfo'
import useModal from '@/hooks/useModal'
import ModalBackground from '@/components/Modal/ModalBackground'
import { GameContext } from '@/providers/GameProvider'
import { useNavigate } from 'react-router-dom'
import { StyledModal } from '@/components/Profile/Views/DashboardView/DashboardModal.styles'
import ModalGamesWrapper from '@/components/Profile/Views/DashboardView/ModalGamesWrapper'
import { AuthContext } from '@/providers/AuthProvider'
import RankInfo from '@/components/Profile/RankInfo/RankInfo'
import LastGameInfo from '@/components/Profile/LastGameInfo/LastGameInfo'
import Achievements from '@/components/Profile/Achievements/Achievements'

const DashboardView = () => {
  document.title = 'Dashboard'

  const { initGame } = useContext(GameContext)
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

  const navigate = useNavigate()

  const startGame = () => {
    initGame()
    navigate('/play')
  }

  return (
    <Wrapper>
      {isHistoryModalOpen && (
        <ModalBackground>
          <StyledModal>
            <h2>HISTORIA GIER</h2>
            <button className='close-button' onClick={handleCloseHistoryModal}>
              X
            </button>
          </StyledModal>
        </ModalBackground>
      )}
      {isGameModalOpen && (
        <ModalBackground>
          <StyledModal>
            <h2>Wybierz tryb gry i kategorię pytań</h2>
            <button className='close-button' onClick={handleCloseGameModal}>
              X
            </button>
            <ModalGamesWrapper />
          </StyledModal>
        </ModalBackground>
      )}
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

import React, { useState, useEffect, useContext } from 'react'
import {
  Achievements,
  GameButtons,
  GameModes,
  GamesInfo,
  LastGameInfo,
  RankWrapper,
  UserStats,
  Wrapper,
} from '@/components/Profile/Views/DashboardView/DashboardView.styles'
import ProgressInfo from '@/components/Profile/ProgressInfo/ProgressInfo'
import { ranks } from '@/helpers/consts'
import useModal from '@/hooks/useModal'
import ModalBackground from '@/components/Modal/ModalBackground'
import { GameContext } from '@/providers/GameProvider'
import { useNavigate } from 'react-router-dom'
import { StyledModal } from '@/components/Profile/Views/DashboardView/DashboardModal.styles'
import ModalGamesWrapper from '@/components/Profile/Views/DashboardView/ModalGamesWrapper'
import { AuthContext } from '@/providers/AuthProvider'

const DashboardView = () => {
  document.title = 'Dashboard'

  const { initGame, lastGameInfo } = useContext(GameContext)
  const { currentUser, mongoUser, getmongoUser } = useContext(AuthContext)

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
          <LastGameInfo>
            <span className='title'>OSTATNIA GRA</span>
            <div className='stats'>
              <div className='stats-inner subject'>
                <span className='subtext'>
                  {lastGameInfo && lastGameInfo.subject
                    ? lastGameInfo.subject.toUpperCase()
                    : 'N/A'}
                </span>
                <span className='text'>PRZEDMIOT</span>
              </div>
              <div className='stats-inner subject'>
                <span className='subtext'>
                  {lastGameInfo && lastGameInfo.answers ? `${lastGameInfo.answers} na 10` : 'N/A'}
                </span>
                <span className='text'>POPRAWNE ODPOWIEDZI</span>
              </div>
              <div className='stats-inner score'>
                <span className='subtext'>
                  {lastGameInfo && lastGameInfo.score ? lastGameInfo.score : 'N/A'}
                </span>
                <span className='text'>WYNIK</span>
              </div>
            </div>
          </LastGameInfo>
        </GameModes>
        <div className='separator'></div>
        <Achievements>
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
        </Achievements>
      </GamesInfo>
    </Wrapper>
  )
}

export default DashboardView

import React, { useContext } from 'react'
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
import { getData } from '@/db/dbMethods'
import { AuthContext } from '@/providers/AuthProvider'
import { GameContext, gameInitialState } from '@/providers/GameProvider'

const DashboardView = () => {
  document.title = 'Dashboard'

  const { currentUser } = useContext(AuthContext)
  const { setLastGameInfo, setGameInfo } = useContext(GameContext)

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
    if (currentUser) {
      getData(currentUser.uid).then((res) => {
        const lastGame = res.data.user.lastGame
        setLastGameInfo(lastGame)
      })
    }

    setGameInfo(gameInitialState)

    localStorage.clear()
  }, [])

  return (
    <Wrapper>
      {isHistoryModalOpen && <HistoryModal closeModal={handleCloseHistoryModal} />}
      {isGameModalOpen && <GameModal closeModal={handleCloseGameModal} />}
      <UserStats>
        {/* <RankInfo /> */}
        <ProgressInfo />
      </UserStats>
      <GamesInfo>
        <GameModes>
          <GameButtons>
            <button className='play' onClick={handleOpenGameModal}>
              GRAJ
            </button>
            {/* <button className='history' onClick={handleOpenHistoryModal}>
              HISTORIA GIER
            </button> */}
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

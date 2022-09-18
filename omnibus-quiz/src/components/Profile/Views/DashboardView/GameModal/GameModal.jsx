import ModalBackground from '@/components/Modal/ModalBackground'
import ModalGames from '@/components/Profile/ModalGames/ModalGames/ModalGames'
import { StyledModal } from '@/components/Profile/Views/DashboardView/GameModal/GameModal.styles'
import { GameContext } from '@/providers/GameProvider'
import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const GameModal = ({ closeModal }) => {
  const { chosenGamemode, chosenCategory, getQuestions, setQuestions, initGame } =
    useContext(GameContext)

  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleStartGame = () => {
    if (chosenGamemode === null || chosenCategory === null) {
      setError('Nie wybrałeś trybu lub kategorii!')
      return
    }

    localStorage.setItem('gamemode', chosenGamemode)
    localStorage.setItem('category', chosenCategory)
    getQuestions().then((res) => setQuestions(res.data.allQuestiongroups[0].questions))
    initGame()
    navigate('/play')
  }

  return (
    <ModalBackground>
      <StyledModal>
        <h2>Wybierz tryb gry i kategorię pytań</h2>
        {error !== '' && <span className='error'>{error}</span>}
        <button className='close-button' onClick={closeModal}>
          X
        </button>
        <ModalGames />
        <button className='play' onClick={handleStartGame}>
          ZAGRAJ
        </button>
      </StyledModal>
    </ModalBackground>
  )
}

export default GameModal

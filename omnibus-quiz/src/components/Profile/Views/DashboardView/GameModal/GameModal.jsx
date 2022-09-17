import ModalBackground from '@/components/Modal/ModalBackground'
import ModalGames from '@/components/Profile/ModalGames/ModalGames/ModalGames'
import { StyledModal } from '@/components/Profile/Views/DashboardView/GameModal/GameModal.styles'
import { GamemodeContext } from '@/providers/GamemodeProvider'
import React, { useState } from 'react'
import { useContext } from 'react'

const GameModal = ({ closeModal }) => {
  const { chosenGm, chosenCg } = useContext(GamemodeContext)

  const [error, setError] = useState('')

  const handleStartGame = () => {
    if (chosenGm === null || chosenCg === null) {
      setError('Nie wybrałeś trybu lub kategorii!')
      return
    }
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

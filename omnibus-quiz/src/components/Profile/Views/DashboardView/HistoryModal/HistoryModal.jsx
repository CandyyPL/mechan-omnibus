import ModalBackground from '@/components/Modal/ModalBackground'
import { StyledHistoryModal } from '@/components/Profile/Views/DashboardView/HistoryModal/HistoryModal.styles'
import React from 'react'

const HistoryModal = ({ closeModal }) => {
  return (
    <ModalBackground>
      <StyledHistoryModal>
        <h2>HISTORIA GIER</h2>
        <button className='close-button' onClick={closeModal}>
          X
        </button>
      </StyledHistoryModal>
    </ModalBackground>
  )
}

export default HistoryModal

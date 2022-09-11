import { useState } from 'react'

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setModalOpen((prev) => !prev)
  }

  const handleCloseModal = () => {
    setModalOpen((prev) => !prev)
  }

  return { handleOpenModal, handleCloseModal, isModalOpen }
}

export default useModal

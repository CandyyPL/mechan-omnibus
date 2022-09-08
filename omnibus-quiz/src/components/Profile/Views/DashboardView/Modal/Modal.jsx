import {
  Background,
  ModalWrapper,
} from '@/components/Profile/Views/DashboardView/Modal/Modal.styles'

const Modal = ({ children }) => {
  return (
    <Background>
      <ModalWrapper>{children}</ModalWrapper>
    </Background>
  )
}

export default Modal

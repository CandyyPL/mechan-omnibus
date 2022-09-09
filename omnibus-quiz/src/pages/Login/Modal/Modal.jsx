import { Background, ModalWrapper } from '@/pages/Login/Modal/Modal.styles'

const Modal = ({ children }) => {
  return (
    <Background>
      <ModalWrapper>{children}</ModalWrapper>
    </Background>
  )
}

export default Modal

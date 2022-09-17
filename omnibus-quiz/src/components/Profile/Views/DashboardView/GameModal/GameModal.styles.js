import { ModalWrapper } from '@/components/Modal/Modal.styles'
import styled from 'styled-components'

export const StyledModal = styled(ModalWrapper)`
  width: 75vw;
  height: 75vh;

  justify-content: space-around;

  position: relative;

  h2 {
    margin: 0;
  }

  span.error {
    color: #df2935;
  }

  .close-button {
    position: absolute;

    top: 20px;
    right: 20px;

    width: 40px;
    height: 40px;

    background-color: #eee;

    border: 2px solid #111;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #111;

    cursor: pointer;

    transition: all 0.2s;

    &:hover {
      background-color: #111;
      color: #eee;
    }
  }

  button.play {
    width: 225px;
    height: 75px;

    background-color: #f3a712;

    border: none;
    border-radius: 10px;

    font-size: 32px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;

    cursor: pointer;
  }
`

import styled from 'styled-components'

export const Background = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #444444dd;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`

export const ModalWrapper = styled.div`
  width: 600px;
  height: 300px;

  background-color: #eee;

  border: none;
  border-radius: 20px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 28px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      width: 250px;
      height: 50px;

      border: none;
      border-radius: 10px;
      margin: 20px;
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

      font-size: 24px;
      font-family: 'Nunito', sans-serif;
      text-align: center;

      &:focus {
        outline: none;
      }
    }

    button {
      width: 200px;
      height: 40px;

      background-color: #4ce0b3;

      border: none;
      border-radius: 10px;

      font-size: 24px;
      font-family: 'Nunito', sans-serif;

      cursor: pointer;
    }
  }
`

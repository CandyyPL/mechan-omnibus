import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-family: 'Nunito', sans-serif;
  font-weight: bold;
`

export const ChangeTemplate = styled.div`
  width: 90%;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  form {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    input,
    button {
      width: 250px;
      height: 50px;

      border: none;
      border-radius: 10px;
      margin-right: 20px;
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

      font-size: 22px;
      font-family: 'Nunito', sans-serif;
      font-weight: bold;
      text-align: center;

      &:focus {
        outline: none;
      }
    }

    button {
      background-color: #4ce0b3;
      cursor: pointer;
    }
  }
`

export const NewPassInfo = styled.div`
  width: 300px;
  height: 50px;

  background-color: ${({ type }) => (type === 'success' ? '#4ce0b3' : '#e9190f')};

  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

  font-size: 20px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: ${({ type }) => (type === 'success' ? '#111' : '#eee')};

  display: flex;
  justify-content: center;
  align-items: center;
`

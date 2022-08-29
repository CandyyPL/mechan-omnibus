import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;

  padding: 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 40px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;

  button {
    width: 125px;
    height: 50px;

    background-color: #00a7e1;

    border: none;
    border-radius: 10px;

    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;

    cursor: pointer;

    &:hover {
      border: 4px solid #111;
    }
  }
`

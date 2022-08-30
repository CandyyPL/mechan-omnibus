import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;

  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Nunito', sans-serif;

  span {
    font-size: 50px;
    font-weight: bold;
  }

  button {
    width: 125px;
    height: 50px;

    background-color: #00a7e1;

    border: none;
    border-radius: 10px;

    font-size: 24px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`

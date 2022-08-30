import styled from 'styled-components'

export const Wrapper = styled.li`
  width: 90%;
  height: 100px;

  border: 4px solid #222;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 24px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #222;

  span {
    margin-right: 20px;
  }

  button {
    width: 100px;
    height: 50px;

    background-color: #df2935;

    border: none;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #eee;

    cursor: pointer;
  }
`

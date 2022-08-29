import styled from 'styled-components'

export const Wrapper = styled.li`
  width: 100%;
  height: 100px;
  position: relative;

  padding: 10px;
  margin-bottom: 20px;
  border: 5px solid #222;
  border-radius: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 22px;
  font-weight: bold;

  span {
    margin-left: 20px;
  }

  button {
    width: 100px;
    height: 50px;

    background-color: #df2935;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);

    border: none;
    border-radius: 10px;

    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #eee;

    position: absolute;
    right: 10px;

    cursor: pointer;

    &:hover {
      border: 4px solid #111;
    }
  }
`

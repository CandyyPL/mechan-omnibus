import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const UserStats = styled.div`
  width: 90%;
  height: 300px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const GamesInfo = styled.div`
  width: 90%;
  height: 350px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-family: 'Nunito', sans-serif;

  div.separator {
    width: 10px;
    height: 100%;

    border-radius: 20px;

    background-color: #aaa;
  }

  /* border: 2px solid black; */
`

export const GameModes = styled.div`
  width: 45%;
  height: 90%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const GameButtons = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  button {
    width: 80%;

    border: none;
    border-radius: 10px;

    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #222;

    cursor: pointer;
  }

  button.play {
    height: 40%;

    background-color: #386641;

    font-size: 2.5vw;
    letter-spacing: 5px;
    color: #eee;

    &:hover {
      border: 6px solid #7cea9c;
    }
  }

  button.history {
    height: 30%;

    background-color: #912f40;

    font-size: 1.5vw;
    letter-spacing: 2px;
    color: #eee;

    &:hover {
      border: 6px solid #f71735;
    }
  }
`

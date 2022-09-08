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

export const RankWrapper = styled.div`
  width: 250px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    height: 60%;
  }

  span {
    font-size: 28px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
  }
`

export const LevelWrapper = styled.div`
  width: 75%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  span {
    font-size: 50px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
  }
`

export const LevelStats = styled.div`
  width: 90%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LevelBar = styled.div`
  width: 100%;
  height: 25px;

  border: 4px solid #111;
  border-radius: 25px;
  margin-bottom: 20px;

  background-color: #ddd;
`

export const LevelFiller = styled.div`
  content: '';
  height: 100%;
  width: ${({ progress }) => `${progress}%`};

  border-radius: inherit;

  background-color: #ce2d4f;
`

export const Stats = styled.div`
  width: 90%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    content: '';

    width: 200px;
    height: 85px;

    border-radius: 20px;
    border: 4px solid #666;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    span {
      color: #222;
    }

    span.text {
      display: flex;

      justify-content: center;
      align-items: center;

      width: 100%;
      font-size: 16px;
      text-align: right;
    }

    span.subtext {
      font-size: 22px;
    }
  }

  div.highest-score {
    background-color: #f3a712;
  }

  div.fav-subject {
    width: 300px;

    background-color: #669bbc;
  }

  div.last-game {
    background-color: #43aa8b;
  }
`

export const Games = styled.div`
  width: 90%;
  height: 350px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border: 2px solid black;
`

export const GameModes = styled.div`
  width: 45%;
  height: 90%;

  border: 2px solid black;
`

export const LastGames = styled.div`
  width: 45%;
  height: 90%;

  border: 2px solid black;
`
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

export const LastGameInfo = styled.div`
  width: 50%;
  height: 100%;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 8px solid #aaa;
  border-radius: 10px;

  span.title {
    font-size: 26px;
    font-weight: bold;

    margin-bottom: 20px;
  }

  div.stats {
    width: 90%;
    height: 75%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div.stats-inner {
    width: 80%;
    height: 35%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      text-align: left;
      font-weight: bold;
    }

    span.text {
      font-size: 0.8vw;
      color: #aaa;
    }

    span.subtext {
      font-size: 1vw;
    }

    &.subject {
    }

    &.score {
      span.subtext {
        font-size: 1.5vw;
      }
    }
  }
`

export const Achievements = styled.div`
  width: 45%;
  height: 90%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  div.achv {
    width: 30%;
    height: 80%;

    border: 2px solid #111;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img {
      height: 55%;
    }

    span {
      width: 80%;

      font-size: 1vw;
      font-weight: bold;
      text-align: center;
    }
  }

  /* border: 2px solid black; */
`

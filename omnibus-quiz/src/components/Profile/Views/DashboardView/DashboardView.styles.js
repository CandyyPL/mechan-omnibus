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

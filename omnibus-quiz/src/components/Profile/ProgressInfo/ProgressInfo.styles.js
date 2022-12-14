import styled from 'styled-components'

export const Wrapper = styled.div`
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

  span.exp {
    font-size: 20px;
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

  background-color: #e5446d;
`

export const Stats = styled.div`
  width: 90%;
  height: 100px;

  display: flex;
  justify-content: space-evenly; //! CHANGE AFTER ADDING FAV SUBJECT
  align-items: center;

  div {
    content: '';

    width: 10.5vw;
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
      font-size: 0.85vw;
      text-align: right;
    }

    span.subtext {
      font-size: 1.2vw;
    }
  }

  div.highest-score {
    background-color: #f3a712;
  }

  div.fav-subject {
    width: 15vw;

    background-color: #52d1dc;
  }

  div.last-game {
    background-color: #4ce0b3;

    span.subtext {
      font-size: 1vw;
    }
  }
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #eee;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const QuizTopbar = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    font-size: 28px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;

    img:first-of-type {
      transform: scaleX(-1);
    }

    img {
      height: 50px;
      margin-inline: 10px;
    }
  }
`

export const QuestionWrapper = styled.div`
  width: 80%;
  height: 70%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  span.title {
    font-size: 50px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
  }
`

export const QuestionsAnswers = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  button.answer {
    width: 300px;
    height: 150px;

    border: 5px solid #aaa;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 22px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;

    cursor: pointer;

    &:not(:disabled):hover {
      border: 5px solid #111;
    }

    &:disabled:hover {
      cursor: default;
    }
  }
`

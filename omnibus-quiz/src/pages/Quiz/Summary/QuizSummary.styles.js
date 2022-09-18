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

export const Title = styled.span`
  font-size: 50px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  margin-top: 40px;
`

export const QuickAnswers = styled.div`
  width: 50%;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  font-size: 32px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;

  span.correct {
    color: #4ce0b3;
  }

  span.wrong {
    color: #df2935;
  }
`

export const BackButton = styled.button`
  width: 300px;
  height: 80px;

  background-color: #fff;

  border: 4px solid #111;

  font-size: 24px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #222;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: #111;
    color: #fff;
  }
`

export const DetailedAnswers = styled.ul`
  width: 80%;
  height: 50%;

  /* border: 4px solid #aaa;
  border-radius: 20px; */

  padding: 10px;

  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  overflow: hidden;
`

export const QuestionInfo = styled.li`
  width: 100%;
  height: 20%;

  background-color: #ddd;

  padding-inline: 15px;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;

  span.qtitle {
    width: 50%;
    line-break: normal;
    word-wrap: normal;

    padding-inline: 10px;
  }

  span.answers {
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
  }

  span.correct {
    color: green;
  }

  span.wrong {
    color: red;
  }
`

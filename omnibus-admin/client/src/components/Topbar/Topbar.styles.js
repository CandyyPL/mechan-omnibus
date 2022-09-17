import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;

  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Nunito', sans-serif;

  .left {
    width: 25%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    span {
      font-size: 50px;
      font-weight: bold;
    }
  }

  .center {
    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      width: 80%;
      height: 60px;

      border: 4px solid #111;
      border-radius: 10px;

      font-size: 24px;
      font-family: 'Nunito', sans-serif;
      font-weight: bold;
      text-align: center;
    }
  }

  .right {
    width: 25%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

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
  }
`

import styled from 'styled-components'

export const Wrapper = styled.div`
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
`

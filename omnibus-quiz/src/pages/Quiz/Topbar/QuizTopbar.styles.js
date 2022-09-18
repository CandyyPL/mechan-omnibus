import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    width: 25%;

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

  span.mode,
  span.category {
    width: 300px;
    height: 75px;

    border: 6px solid #aaa;
    border-radius: 20px;
  }

  span.mode {
    background-color: #52d1dc;
  }

  span.category {
    background-color: #4ce0b3;
  }
`

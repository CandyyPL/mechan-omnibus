import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: #26a96c;
  box-shadow: 0 0 20px 5px #26a96c;

  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 10;
`

export const Logo = styled.div`
  width: fit-content;
  height: fit-content;
  max-height: 100px;

  font-size: 50px;
  font-family: 'Chango', sans-serif;
  letter-spacing: 5px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 80px;

    margin: 0 10px;

    &:first-child {
      transform: scaleX(-1);
    }
  }
`

export const SideDiv = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    width: 140px;
    height: 60px;

    background-color: #00a7e1;

    border: 4px solid #eee;
    border-radius: 10px;
    margin: 0 20px;

    font-size: 18px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #eee;

    cursor: pointer;

    &:hover {
      border: 4px solid #111;
    }
  }
`

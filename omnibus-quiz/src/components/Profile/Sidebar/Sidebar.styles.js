import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 400px;
  height: 90%;

  background-color: #fff;

  position: relative;
  z-index: -1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  box-shadow: 0 0 25px 1px #22222244;
  border-bottom-right-radius: 20px;

  button {
    width: 160px;
    height: 60px;

    background-color: #fff;

    border: 4px solid #222;

    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;

    cursor: pointer;

    transition: background-color 0.2s;

    &:hover {
      background-color: #222;
      color: #eee;
    }
  }
`

export const SideBarLogo = styled.div`
  width: 100%;
  height: 80px;

  font-size: 24px;
  font-family: 'Chango', sans-serif;
  font-weight: bold;
  color: #222;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 50px;
    margin-left: 20px;
  }
`

export const SideBarMenu = styled.ul`
  width: 100%;
  height: 75%;

  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  li {
    width: fit-content;
    height: 50px;

    position: relative;

    display: flex;
    align-items: center;

    font-size: 24px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    text-align: left;

    margin-bottom: 20px;

    cursor: pointer;

    &::after {
      content: '';

      width: 100%;
      height: 2px;

      background-color: #111;

      position: absolute;
      left: 0;
      bottom: 0;

      transform: scaleX(0);
      transition: transform 0.2s;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 750px;

  font-family: 'Nunito', sans-serif;
  font-weight: bold;
`

export const Main = styled.div`
  width: 100%;
  height: 550px;
  background-color: #222;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const LeftSide = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const JoinMotto = styled.div`
  width: 100%;
  height: 20%;
  position: relative;
  z-index: 10;

  font-size: 42px;
  color: #eee;
  letter-spacing: 2px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const JoinMottoButton = styled.button`
  width: 200px;
  height: 65px;

  background-color: #00a7e1;

  border: none;
  border-radius: 10px;
  margin: 0 15px;

  font-size: 40px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  color: #eee;

  cursor: pointer;

  &:hover {
    border: 4px solid #eee;
  }
`

export const Student = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
  z-index: 1;

  img {
    position: absolute;

    height: 480px;

    left: 380px;
    bottom: -120px;
  }
`

export const Smoke = styled.div`
  width: 300px;
  height: 60px;
  background-color: #eee;

  position: relative;
  top: 25%;
  left: 120px;

  border: none;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 22px;
  letter-spacing: 1px;
  color: #222;

  &::after {
    content: '';
    position: absolute;

    right: -20px;

    width: 25px;
    height: 25px;
    background-color: #eee;

    clip-path: polygon(0 0, 100% 50%, 0 100%);
  }
`

export const RightSide = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Board = styled.div`
  width: 60%;
  height: 65%;

  background-color: #eee;
  position: relative;

  border: 10px dashed #df2935;
  border-radius: 10px;
  box-shadow: 0 0 20px 4px #df2935;
  padding: 10px;

  font-size: 24px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #222;

  p {
    text-align: center;

    &:first-child {
      font-size: 30px;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;

    top: -20%;
    right: -10%;

    height: 200px;
  }
`

export const MainBottom = styled.div`
  width: 100%;
  height: 200px;
  background-color: #555;
  position: relative;
  z-index: 0;

  clip-path: polygon(0 0, 100% 0, 100% 20%, 30% 100%, 0% 20%);
`

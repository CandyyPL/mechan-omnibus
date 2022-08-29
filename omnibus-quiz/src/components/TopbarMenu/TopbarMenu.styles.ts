import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #26a96c;
  box-shadow: 0 0 20px 2px #26a96c;
  color: #eee;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;

  position: relative;
  z-index: 10;
`

export const LeftSide = styled.div`
  width: 200px;
  height: 100%;
`

export const Logo = styled.div`
  font-size: 46px;
  font-family: 'Chango', sans-serif;
  text-shadow: 0 0 10px #eee;
  letter-spacing: 4px;

  img {
    height: 80px;
  }

  img.left {
    transform: scaleX(-1);
  }

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Options = styled.div`
  width: 200px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Login = styled.button`
  //   width: 100px;
  //   height: 40px;

  //   background-color: #0a2e36;
  //   padding: 5px;

  //   border: none;
  //   border-radius: 5px;
  //   box-sizing: content-box;

  //   /* img {
  //     height: 30px;
  //     margin-left: 15px;
  //   } */

  //   font-size: 20px;
  //   font-family: 'Nunito', sans-serif;
  //   font-weight: bold;
  //   color: #eee;

  //   display: flex;
  //   justify-content: space-around;
  //   align-items: center;

  //   cursor: pointer;

  //   &:hover {
  //     border: 3px solid #eee;
  //   }
`

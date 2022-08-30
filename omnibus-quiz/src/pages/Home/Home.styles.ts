import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`

export const TopPart = styled.div`
  width: 100%;
  height: 540px;
  background-color: #222;
  position: relative;
  z-index: 5;

  img.student {
    position: absolute;
    bottom: -150px;
    left: 350px;
  }

  img.lights {
    position: absolute;
    right: 150px;
    top: 20px;

    height: 200px;
  }
`

export const JoinNow = styled.div`
  width: 800px;
  height: 100px;

  position: absolute;
  transform: translateX(20%) translateY(25%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 40px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  letter-spacing: 4px;
  color: #eee;
`

export const Smoke = styled.div`
  width: 360px;
  height: 80px;
  background-color: #eee;
  position: absolute;

  bottom: 300px;
  left: 60px;

  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 26px;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;

  &::before {
    content: '';
    position: absolute;

    right: -3%;
    bottom: -15%;

    transform: rotate(45deg);

    border-top: 13px solid transparent;
    border-left: 26px solid #eee;
    border-bottom: 13px solid transparent;
  }

  box-shadow: -5px 5px 20px 4px #000;
`

export const Board = styled.div`
  width: 600px;
  height: 380px;
  background-color: #eee;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 200px;

  border: 8px dashed #df2935;
  border-radius: 8px;
  padding: 0 20px;

  box-shadow: 0 0 20px 4px #df2935;

  font-size: 26px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;

  p.main {
    font-size: 32px;
    font-weight: bolder;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`

// export const TopPartCloser = styled.div`
//   width: 2000px;
//   height: 600px;
//   transform: translateY(-400px) rotate(-10deg) skew(60deg);
//   background-color: #555;
//   position: absolute;
// `

export const TopPartCloser = styled.div`
  width: 100%;
  height: 300px;
  background-color: #555;

  position: absolute;
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 10%, 32% 75%, 0% 25%);
`

export const MiddlePart = styled.div`
  width: 100%;
  height: 62.5%;
  background-color: #eee;
  position: relative;
  z-index: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// export const RankingText = styled.div`
//   width: 250px;
//   height: 100px;

//   position: absolute;
//   right: 50px;
//   top: 180px;

//   display: flex;
//   justify-content: space-around;
//   align-items: center;

//   font-size: 46px;
//   font-family: 'Nunito', sans-serif;
//   font-weight: bold;

//   img {
//     height: 60px;
//   }
// `

export const JoinNowWrapper = styled.div`
  width: 80%;
  height: 600px;

  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateY(100px);
`

export const JoinForm = styled.form`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Nunito', sans-serif;

  p.title {
    font-size: 50px;
    font-weight: bold;
  }

  input {
    width: 400px;
    height: 50px;

    border: none;
    border-radius: 10px;
    margin: 5px;

    text-align: center;

    font-size: 22px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;

    &:focus {
      outline: none;

      &::placeholder {
        color: transparent;
      }
    }
  }
`

export const Button = styled.button`
  width: 360px;
  height: 75px;

  border: none;
  border-radius: 5px;
  margin-top: 20px;

  background-color: #00a7e1;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 28px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  color: #eee;

  cursor: pointer;

  &:hover {
    border: 4px solid #111;
  }
`

export const JoinNowButton = styled(Button)`
  width: 150px;
  height: 60px;

  margin: 0 15px;

  &:hover {
    border: 4px solid #eee;
  }
`

interface ClassOptionProps {
  active: boolean
  name: string
}

export const JoinLeft = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    height: 400px;
  }
`

export const JoinWarning = styled.div`
  width: 75%;
  height: 135px;
  background-color: #df2935;

  border-radius: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 20px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #eee;
  /* text-align: center; */

  img {
    height: 80px;
  }
`

export const Quote = styled.div`
  width: 75%;
  height: 125px;

  transform: translateY(180px);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 26px;
  font-family: 'Charmonman', serif;
  font-weight: bold;
`

// export const FooterEntry = styled.div`
//   &::after,
//   &::before {
//     content: '';
//     width: 80px;
//     height: 50px;

//     position: absolute;
//     top: -45%;

//     background-color: #eee;
//   }

//   &::before {
//     left: 50%;
//     transform: skew(0, -20deg);
//   }

//   &::after {
//     right: 50%;
//     transform: skew(0, 20deg);
//   }
// `

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  background-color: #222;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Nunito', sans-serif;
  color: #eee;
`

export const Copyright = styled.div`
  width: 500px;
  height: 100%;

  /* position: absolute; */

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: bold;
`

export const ToS = styled.a`
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;
`

export const FooterRight = styled.div`
  width: 500px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 18px;
`

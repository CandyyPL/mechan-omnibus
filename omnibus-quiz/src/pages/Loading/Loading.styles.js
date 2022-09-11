import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #eee;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 80px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    letter-spacing: 4px;
  }

  .lds-dual-ring {
    display: inline-block;
    width: 128px;
    height: 128px;
  }
  .lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 120px;
    height: 120px;
    margin: 10px;
    border-radius: 50%;
    border: 12px solid #111;
    border-color: #111 transparent #111 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

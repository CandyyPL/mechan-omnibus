import styled from 'styled-components'

export const ErrorWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #eee;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 250px;
  }

  h1 {
    font-size: 40px;
    font-family: 'Nunito', sans-serif;
    margin-bottom: 0;
  }

  h3 {
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
  }
`

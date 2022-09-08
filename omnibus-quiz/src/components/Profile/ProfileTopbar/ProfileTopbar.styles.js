import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const TopbarStats = styled.span`
  width: 80px;
  height: 100%;

  margin-inline: 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 26px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;

  img {
    height: 40%;
  }

  img.avatar {
    height: 50%;
  }
`

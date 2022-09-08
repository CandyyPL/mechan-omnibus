import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const TopbarStats = styled.span`
  width: 100px;
  height: 60%;

  margin-inline: 20px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 26px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;

  &.item {
    cursor: pointer;
  }

  img {
    height: 60%;
    margin-right: 15px;
  }

  img.avatar {
    height: 90%;
    margin-left: 10px;
  }

  &.item:hover {
    background-color: #ddd;
  }
`

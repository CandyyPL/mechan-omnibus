import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  .left,
  .right {
    width: 45%;
    height: 100%;
  }

  .left {
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    /* font-weight: bold; */

    padding: 20px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
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

  &.item:hover {
    background-color: #ddd;
  }

  img {
    height: 60%;
    margin-right: 15px;
  }
`

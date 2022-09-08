import styled from 'styled-components'

export const Wrapper = styled.li`
  width: 90%;
  height: 60px;

  background-color: #fff;

  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 22px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;

  .left,
  .right {
    height: 100%;

    display: flex;
    align-items: center;

    div.fav-subject {
      color: #000;
    }
  }
`

export const UserData = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  span.rank {
    margin-inline: 10px;

    display: flex;
    align-items: center;

    img {
      height: 25px;
    }
  }
`

export const UserStat = styled.div`
  width: 200px;
  height: 100%;

  background-color: ${({ bgColor }) => bgColor};

  border-radius: 10px;
  padding: 10px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 1000px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const JoinWrapper = styled.div`
  width: 40%;
  height: 800px;
`

export const BusWithWarning = styled.div`
  width: 40%;
  height: 800px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img.bus {
    height: 400px;
  }
`

export const UserDataWarning = styled.div`
  width: 500px;
  height: 140px;

  background-color: #df2935;

  padding: 10px;

  border: none;
  border-radius: 10px;
  margin-top: 25px;

  font-size: 18px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #eee;

  img.danger {
    height: 100px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`

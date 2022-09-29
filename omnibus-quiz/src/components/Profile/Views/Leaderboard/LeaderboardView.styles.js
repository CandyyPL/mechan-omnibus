import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1,
  h3 {
    font-family: 'Nunito', sans-serif;
    margin: 0;
  }

  h1 {
    font-size: 34px;
  }

  h3 {
    font-size: 20px;
  }
`

export const Empty = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RankingList = styled.ul`
  width: 100%;
  height: fit-content;
  max-height: 80vh;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0;

  list-style: none;
`

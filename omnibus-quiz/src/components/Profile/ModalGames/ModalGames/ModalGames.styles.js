import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 90%;
  height: 60%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .gamemodeSelect {
    width: 50%;
    height: 100%;

    display: grid;

    // display: flex; //!
    // justify-content: center; //!
    // align-items: center; //!

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    border-right: 4px solid #aaa;
    padding: 20px;
  }

  .categorySelect {
    width: 50%;
    height: 80%;

    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    padding: 20px;
  }
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 90%;
  height: 60%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    width: 50%;
    height: 100%;

    display: grid;
  }

  .gamemodeSelect {
    display: flex; //!
    justify-content: center; //!
    align-items: center; //!

    //? grid-template-columns: 1fr 1fr;
    //? grid-template-rows: 1fr 1fr;

    border-right: 4px solid #aaa;
    padding: 20px;

    .gamemode {
      //? width: 80%;
      //? height: 50%;
      width: 40%; //!
      height: 100px; //!

      background-color: #52d1dc;

      border: 4px solid #111;
      border-radius: 20px;

      //? place-self: center;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
    }
  }

  .categorySelect {
    height: 80%;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    padding: 20px;

    .category {
      width: 90%;
      height: 80%;

      background-color: #4ce0b3;

      border: 4px solid #111;
      border-radius: 20px;

      place-self: center;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 22px;

      cursor: pointer;
    }
  }
`

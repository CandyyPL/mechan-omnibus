import styled from 'styled-components'

export const Wrapper = styled.li`
  width: 90%;
  height: 100px;

  border: ${({ itemState }) =>
    itemState == 'approved' ? '4px solid #09bc8a' : '4px solid #df2935'};
  border: ${({ itemState }) =>
    itemState != 'approved' && itemState != 'blocked' ? '4px solid #222' : null};

  border-radius: 10px;
  margin-bottom: 20px;
  padding: 0 20px;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 24px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #222;

  span {
    margin-right: 20px;
  }

  /* button {
    width: 100px;
    height: 50px;

    background-color: #df2935;

    border: none;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #eee;

    cursor: pointer;
  } */

  div.optionsDiv {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    img {
      height: 60px;
    }
  }
`

export const StyledOptions = styled.ul`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%) translateX(120px);

  width: 100px;
  height: 90px;

  background-color: #fff;

  border: 2px solid #222;
  border-radius: 10px;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  list-style: none;

  font-size: 18px;

  li {
    width: 100%;
    height: 33%;

    &:first-child {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    &:last-child {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    border-bottom: 1px solid #aaa;
    padding: 5px;

    cursor: pointer;

    &.approve:hover {
      background-color: #09bc8a;
    }

    &.delete:hover {
      background-color: #df2935;
    }

    &.block:hover {
      background-color: #222;
      color: #eee;
    }
  }
`

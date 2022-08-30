import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.span`
  font-size: 50px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #888;
`

export const FormWrapper = styled.form`
  width: 500px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 300px;
    height: 50px;

    border: none;
    border-radius: 10px;
    margin-bottom: 25px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.4);

    background-color: #fff;

    font-size: 22px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #222;
    text-align: center;

    &::placeholder {
      color: #888;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    width: 275px;
    height: 60px;

    background-color: #00a7e1;

    border: none;
    border-radius: 10px;

    font-size: 24px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #eee;
    letter-spacing: 2px;
    text-align: center;

    cursor: pointer;

    &:hover {
      background-color: #33a9e3;
      border: 4px solid #222;
    }
  }
`

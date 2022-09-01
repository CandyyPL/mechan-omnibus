import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormWrapper = styled.form`
  width: 500px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Nunito', sans-serif;
  font-weight: bold;

  h1 {
    font-size: 50px;
    margin-bottom: 50px;
  }

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

export const LoginInfo = styled.div`
  width: 400px;
  height: 125px;

  background-color: ${({ type }) => (type === 'success' ? '#09bc8a' : '#df2935')};

  border: none;
  border-radius: 10px;
  margin-top: 25px;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  color: ${({ type }) => (type === 'success' ? '#111' : '#eee')};
  text-align: center;
`

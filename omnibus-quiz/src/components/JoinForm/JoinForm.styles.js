import styled from 'styled-components'

export const Wrapper = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Nunito', sans-serif;

  p {
    font-size: 60px;
    font-weight: bold;

    margin-top: 0;
  }

  input:first-of-type,
  input:last-of-type {
    margin-bottom: 25px;
  }
`

export const FormField = styled.input`
  width: 400px;
  height: 60px;

  background-color: #fff;

  border: none;
  border-radius: 10px;

  font-size: 22px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  text-align: center;

  &:focus {
    outline: none;
  }
`

export const ClassChoose = styled.div`
  width: 400px;
  height: 80px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 10px;

  font-size: 24px;
  font-weight: bold;
`

export const ClassOption = styled.div`
  width: 35px;
  height: 40px;

  border-radius: 5px;
  margin-left: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border: ${({ active }) => (active ? '3px solid #00a7e1' : '3px solid #222')};
  color: ${({ active }) => (active ? '#00a7e1' : '#111')};
`

export const Button = styled.button`
  width: 380px;
  height: 75px;

  background-color: #00a7e1;

  border: none;
  border-radius: 10px;

  font-size: 26px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  color: #eee;

  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const SignUpInfo = styled.div`
  width: 500px;
  height: 75px;

  background-color: ${({ type }) => (type === 'success' ? '#09bc8a' : '#df2935')};

  border: none;
  border-radius: 10px;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;

  color: ${({ type }) => (type === 'success' ? '#111' : '#eee')};
`

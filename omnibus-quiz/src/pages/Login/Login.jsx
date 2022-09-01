import React, { useRef, useState } from 'react'
import { FormContainer, FormWrapper, LoginInfo, Wrapper } from 'pages/Login/Login.styles'
import Topbar from 'components/Topbar/Topbar'
import { auth } from 'auth/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const checkUserState = async (email) => {
    const res = await axios.post('http://localhost:5000/chkstate', { email })
    return res.data.state
  }

  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (email === undefined || password === undefined) {
      setError('Invalid credentials')
      return
    }

    const approvalState = await checkUserState(email)

    if (approvalState === null || approvalState === 'blocked') {
      setError(
        'Przed logowaniem musisz się zapisać na stronie głównej. Jeśli sytuacja się powtarza, skontaktuj się z administratorem serwisu.'
      )
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSuccess('Pomyślnie zarejestrowano!')
        setTimeout(() => {
          navigate('/dashboard')
        }, 2000)
      })
      .catch((err) => {
        if (err.code.includes('email-already-in-use')) {
          signInWithEmailAndPassword(auth, email, password)
            .then(() => {
              setSuccess('Pomyślnie zalogowano! Za chwilę nastąpi przekierowanie.')
              setTimeout(() => {
                navigate('/dashboard')
              }, 2000)
            })
            .catch((err) => console.log(err))
        }
      })
  }

  return (
    <Wrapper>
      <Topbar />
      <FormContainer>
        <FormWrapper onSubmit={handleSignIn}>
          <h1>Zaloguj się</h1>
          <input type='email' placeholder='e-mail' ref={emailRef} required />
          <input type='password' placeholder='password' ref={passwordRef} required />
          <button type='submit'>SIGN IN</button>
          {success != '' ? (
            <LoginInfo type='success'>{success}</LoginInfo>
          ) : (
            <>{error != '' ? <LoginInfo type='error'>{error}</LoginInfo> : null}</>
          )}
        </FormWrapper>
      </FormContainer>
    </Wrapper>
  )
}

export default Login

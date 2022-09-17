import React, { useRef, useState } from 'react'
import { FormContainer, FormWrapper, LoginInfo, Wrapper } from '@/pages/Login/Login.styles'
import Topbar from '@/components/Topbar/Topbar'
import { auth } from '@/auth/firebase'
import { browserLocalPersistence, browserSessionPersistence, setPersistence } from 'firebase/auth'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { handleSignUser } from '@/auth/authMethods'

const Login = () => {
  document.title = 'Omnibus - Login'

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const checkUserState = async (email) => {
    const res = await axios.post('http://localhost:5000/chkstate', { email })
    return res.data.state
  }

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  const loginButtonRef = useRef(null)

  const handleSignIn = async (data) => {
    const email = data.email
    const password = data.password

    if (email === undefined || password === undefined) {
      setError('Niepoprawny email lub hasło!')
      return
    }

    loginButtonRef.current.disabled = true

    const approvalState = await checkUserState(email)

    if (approvalState === null || approvalState === 'blocked') {
      setError(
        'Nie możesz się teraz zalogować. Pamiętaj, że przed pierwszym logowaniem musisz się zapisać na stronie głównej. Jeśli sytuacja się powtarza, skontaktuj się z administratorem serwisu.'
      )
      loginButtonRef.current.disabled = false
      return
    }

    if (data.loginPersist === true) {
      setPersistence(auth, browserLocalPersistence).then(() => {
        handleSignUser(data.email, data.password, setSuccess, navigate)
      })
    } else if (data.loginPersist === false) {
      setPersistence(auth, browserSessionPersistence).then(() => {
        handleSignUser(data.email, data.password, setSuccess, navigate)
      })
    }
  }

  return (
    <Wrapper>
      <Topbar />
      <FormContainer>
        <FormWrapper onSubmit={handleSubmit(handleSignIn)}>
          <h1>Zaloguj się</h1>
          <input type='email' placeholder='e-mail' {...register('email')} required />
          <input type='password' placeholder='password' {...register('password')} required />
          <span className='persist-wrapper'>
            <input type='checkbox' name='persist' {...register('loginPersist')} />
            <label htmlFor='persist'>Nie wylogowuj mnie</label>
          </span>
          <button type='submit' ref={loginButtonRef}>
            ZALOGUJ
          </button>
          {success !== '' ? (
            <LoginInfo type='success'>{success}</LoginInfo>
          ) : (
            <>{error !== '' ? <LoginInfo type='error'>{error}</LoginInfo> : null}</>
          )}
        </FormWrapper>
      </FormContainer>
    </Wrapper>
  )
}

export default Login

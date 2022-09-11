import React, { useContext, useEffect, useRef, useState } from 'react'
import { FormContainer, FormWrapper, LoginInfo, Wrapper } from '@/pages/Login/Login.styles'
import Topbar from '@/components/Topbar/Topbar'
import { auth } from '@/auth/firebase'
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useModal from '@/hooks/useModal'
import { AuthContext } from '@/providers/AuthProvider'
import { addData } from '@/auth/dbMethods'
import { useForm } from 'react-hook-form'
import Modal from '@/components/Modal/Modal'

const Login = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const checkUserState = async (email) => {
    const res = await axios.post('http://localhost:5000/chkstate', { email })
    return res.data.state
  }

  const { dbSnap } = useContext(AuthContext)

  const { register, handleSubmit } = useForm()

  const { handleOpenModal, handleCloseModal, isModalOpen } = useModal()

  // useEffect(() => {
  //   if (dbSnap === null || dbSnap.username === undefined) handleOpenModal()
  // }, [dbSnap])

  const handleSetUsername = async (data) => {
    await addData({ username: data.username })
    handleCloseModal()
    navigate('/')
  }

  const navigate = useNavigate()

  const loginButtonRef = useRef(null)
  const setUsernameButtonRef = useRef(null)

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
        handleSignUser(data.email, data.password)
      })
    } else if (data.loginPersist === false) {
      setPersistence(auth, browserSessionPersistence).then(() => {
        handleSignUser(data.email, data.password)
      })
    }
  }

  const handleSignUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSuccess('Pomyślnie zarejestrowano!')
        setTimeout(() => {
          handleOpenModal()
        }, 1000)
      })
      .catch((err) => {
        if (err.code.includes('email-already-in-use')) {
          signInWithEmailAndPassword(auth, email, password)
            .then(() => {
              setSuccess('Pomyślnie zalogowano! Za chwilę nastąpi przekierowanie.')
              setTimeout(() => {
                navigate('/')
              }, 500)
            })
            .catch((err) => console.log(err))
        }
      })
  }

  return (
    <Wrapper>
      {isModalOpen && (
        <Modal>
          <span>Ustaw nową nazwę użytkownika</span>
          <form onSubmit={handleSubmit(handleSetUsername)}>
            <input type='text' placeholder='Nowa nazwa' {...register('username')} />
            <button type='submit' ref={setUsernameButtonRef}>
              ZATWIERDŹ
            </button>
          </form>
        </Modal>
      )}
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

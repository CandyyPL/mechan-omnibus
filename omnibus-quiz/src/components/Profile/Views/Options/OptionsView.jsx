import React, { useContext, useState } from 'react'
import {
  ChangeTemplate,
  NewPassInfo,
  Wrapper,
} from '@/components/Profile/Views/Options/OptionsView.styles'
import { useForm } from 'react-hook-form'
import { updatePassword } from 'firebase/auth'
import { AuthContext } from '@/providers/AuthProvider'
import { addData } from '@/auth/dbMethods'

const OptionsView = () => {
  const [newPassErr, setNewPassErr] = useState('')
  const [newPassSuccess, setNewPassSuccess] = useState('')

  const { register, handleSubmit, reset } = useForm()

  const { currentUser } = useContext(AuthContext)

  const handleChangePassword = (data) => {
    if (data.newPass !== data.newPassAgain) {
      setNewPassErr('Hasła nie są takie same!')
      return
    }

    updatePassword(currentUser, data.newPass)
      .then(() => {
        setNewPassSuccess('Hasło zostało zmienione!')
        reset({ newPass: '', newPassAgain: '' })
      })
      .catch((err) => {
        console.log(err)
        setNewPassErr('Wystąpił bład.')
        return
      })
  }

  const handleChangeUsername = async (data) => {
    await addData({ username: data.newUsername })
    reset({ newUsername: '' })
  }

  return (
    <Wrapper>
      <h1>Ustawienia</h1>
      <ChangeTemplate>
        <h2>Zmień swoje hasło</h2>
        <form onSubmit={handleSubmit(handleChangePassword)}>
          <input type='password' placeholder='Nowe hasło' {...register('newPass')} required />
          <input
            type='password'
            placeholder='Powtórz nowe hasło'
            {...register('newPassAgain')}
            required
          />
          <button type='submit'>ZMIEŃ HASŁO</button>
          {newPassErr !== '' && <NewPassInfo type='error'>{newPassErr}</NewPassInfo>}
          {newPassErr === '' && newPassSuccess !== '' && (
            <NewPassInfo type='success'>{newPassSuccess}</NewPassInfo>
          )}
        </form>
      </ChangeTemplate>
      <ChangeTemplate>
        <h2>Zmień nazwę użytkownika</h2>
        <form onSubmit={handleSubmit(handleChangeUsername)}>
          <input type='text' placeholder='Nowa nazwa' {...register('newUsername')} required />
          <button type='submit'>ZMIEŃ NAZWĘ</button>
        </form>
      </ChangeTemplate>
    </Wrapper>
  )
}

export default OptionsView

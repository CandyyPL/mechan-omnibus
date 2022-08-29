import { auth } from '@/auth/firebase'
import { FormWrapper, Title, Wrapper } from '@/pages/UnAuthApp/UnAuthApp.styles'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FC, useRef, useState } from 'react'

const UnAuthApp: FC = () => {
  const [error, setError] = useState('')

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSignIn = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    if (email == undefined || password == undefined) {
      setError('Invalid credentials')
      return
    }

    try {
      signInWithEmailAndPassword(auth, email!, password!)
    } catch (err) {
      console.log(err)
      setError('Invalid credentials or Internal server error')
      return
    }
  }

  return (
    <Wrapper>
      <Title>Sign In</Title>
      <FormWrapper onSubmit={handleSignIn}>
        <input type='text' placeholder='e-mail' ref={emailRef} />
        <input type='password' placeholder='password' ref={passwordRef} />
        <button type='submit'>SIGN IN</button>
      </FormWrapper>
    </Wrapper>
  )
}

export default UnAuthApp

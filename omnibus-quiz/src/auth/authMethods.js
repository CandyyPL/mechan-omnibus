import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/auth/firebase'

export const handleSignUser = (email, password, setSuccess, navigate) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      setSuccess('Pomyślnie zarejestrowano!')
      navigate('/profile')
    })
    .catch((err) => {
      if (err.code.includes('email-already-in-use')) {
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            setSuccess('Pomyślnie zalogowano! Za chwilę nastąpi przekierowanie.')
            setTimeout(() => {
              navigate('/profile')
            }, 250)
          })
          .catch((err) => console.log(err))
      }
    })
}

import React, { useRef, useState } from 'react'
import {
  Button,
  ClassChoose,
  ClassOption,
  FormField,
  SignUpInfo,
  Wrapper,
} from '@/components/Home/JoinForm/JoinForm.styles'
import axios from 'axios'

const JoinForm = () => {
  const classesObj = {
    k1: false,
    k2: false,
    k3: false,
    k4: false,
  }

  const [classes, setClasses] = useState(classesObj)
  const [signUpWarning, setSignUpWarning] = useState('')
  const [signUpSuccess, setSignUpSuccess] = useState('')

  const handleClassChange = (e) => {
    const clicked = e.currentTarget.getAttribute('name')

    let temp = {}
    Object.assign(temp, { ...classes })

    Object.keys(classesObj).forEach((k) => {
      if (clicked === k && classes[k] === false) {
        Object.assign(temp, { ...temp, [k]: !temp[k] })
      } else if (clicked !== k && classes[k] === true) {
        Object.assign(temp, { ...temp, [k]: !temp[k] })
      }
    })

    setClasses(temp)
  }

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const profileRef = useRef(null)

  const [nameVal, setNameVal] = useState('')
  const [emailVal, setEmailVal] = useState('')
  const [profileVal, setProfileVal] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault()

    const name = nameRef.current?.value
    const email = emailRef.current?.value
    const profile = profileRef.current?.value

    if (name === '' || email === '' || profile === '') {
      setSignUpWarning('Wypełnij wszystkie pola!')
      return
    }

    const classNum = Object.keys(classes).find((k) => classes[k] === true)
    if (classNum === undefined) {
      setSignUpWarning('Wybierz klasę!')
      return
    }

    let temp = {}

    Object.assign(temp, { ...classes })

    Object.keys(classesObj).forEach((k) => {
      Object.assign(temp, { ...temp, [k]: false })
    })

    setClasses(temp)

    const sendData = {
      name,
      email,
      class: classNum,
      profile,
    }

    try {
      await axios.post('http://localhost:5000/signnew', sendData)
      setNameVal('')
      setEmailVal('')
      setProfileVal('')
      setSignUpWarning('')
      setSignUpSuccess('Zgłoszenie wysłane!')
    } catch (err) {
      console.log(err)
      setSignUpWarning('Wystąpił błąd. Sprubój ponownie później.')
    }
  }

  return (
    <Wrapper onSubmit={handleSignup}>
      <p>Zapisz się</p>
      <FormField
        type='text'
        value={nameVal}
        onChange={(e) => setNameVal(e.target.value)}
        ref={nameRef}
        placeholder='Imię i nazwisko'
      />
      <FormField
        type='text'
        value={emailVal}
        onChange={(e) => setEmailVal(e.target.value)}
        ref={emailRef}
        placeholder='Adres e-mail'
      />
      <ClassChoose>
        <span>Klasa:</span>
        <ClassOption active={classes.k1} name='k1' onClick={handleClassChange}>
          1
        </ClassOption>
        <ClassOption active={classes.k2} name='k2' onClick={handleClassChange}>
          2
        </ClassOption>
        <ClassOption active={classes.k3} name='k3' onClick={handleClassChange}>
          3
        </ClassOption>
        <ClassOption active={classes.k4} name='k4' onClick={handleClassChange}>
          4
        </ClassOption>
      </ClassChoose>
      <FormField
        type='text'
        value={profileVal}
        onChange={(e) => setProfileVal(e.target.value)}
        ref={profileRef}
        placeholder='Profil nauki'
      />
      <Button type='submit'>WYŚLIJ ZGŁOSZENIE</Button>
      {signUpWarning !== '' && signUpSuccess === '' ? (
        <SignUpInfo type='warning'>{signUpWarning}</SignUpInfo>
      ) : null}
      {signUpWarning === '' && signUpSuccess !== '' ? (
        <SignUpInfo type='success'>{signUpSuccess}</SignUpInfo>
      ) : null}
    </Wrapper>
  )
}

export default JoinForm

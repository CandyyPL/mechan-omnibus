import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const GamemodeContext = createContext({})

const GamemodeProvider = ({ children }) => {
  const [chosenGm, setChosenGm] = useState('')
  const [chosenCg, setChosenCg] = useState('')

  const provide = { chosenGm, setChosenGm, chosenCg, setChosenCg }

  return <GamemodeContext.Provider value={provide}>{children}</GamemodeContext.Provider>
}

export default GamemodeProvider

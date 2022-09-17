import { Wrapper } from '@/components/Profile/ModalGames/GameMode/GameMode.styles'
import { GamemodeContext } from '@/providers/GamemodeProvider'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const GameMode = ({ mode }) => {
  const { chosenGm, setChosenGm } = useContext(GamemodeContext)
  const [style, setStyle] = useState(null)

  const handleGmClick = () => {
    setChosenGm(mode)
  }

  useEffect(() => {
    if (chosenGm === mode) {
      setStyle('selected')
    } else {
      setStyle(null)
    }
  }, [chosenGm])

  useEffect(() => {
    setStyle(null)
    setChosenGm(null)
  }, [])

  return (
    <Wrapper selected={style} onClick={handleGmClick}>
      {mode}
    </Wrapper>
  )
}

export default GameMode

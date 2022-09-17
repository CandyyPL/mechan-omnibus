import { Wrapper } from '@/components/Profile/ModalGames/GameMode/GameMode.styles'
import { GameContext } from '@/providers/GameProvider'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const GameMode = ({ mode }) => {
  const { chosenGamemode, setChosenGamemode } = useContext(GameContext)
  const [style, setStyle] = useState(null)

  const handleGmClick = () => {
    setChosenGamemode(mode)
  }

  useEffect(() => {
    if (chosenGamemode === mode) {
      setStyle('selected')
    } else {
      setStyle(null)
    }
  }, [chosenGamemode])

  useEffect(() => {
    setStyle(null)
    setChosenGamemode(null)
  }, [])

  return (
    <Wrapper selected={style} onClick={handleGmClick}>
      {mode}
    </Wrapper>
  )
}

export default GameMode

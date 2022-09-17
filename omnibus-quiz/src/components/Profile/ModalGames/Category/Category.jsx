import React, { useState, useEffect, useContext } from 'react'
import { Wrapper } from '@/components/Profile/ModalGames/Category/Category.styles'
import { GamemodeContext } from '@/providers/GamemodeProvider'

const Category = ({ group }) => {
  const { chosenCg, setChosenCg } = useContext(GamemodeContext)
  const [style, setStyle] = useState(null)

  const handleCatClick = () => {
    setChosenCg(group)
  }

  useEffect(() => {
    if (chosenCg === group) {
      setStyle('selected')
    } else {
      setStyle(null)
    }
  }, [chosenCg])

  useEffect(() => {
    setStyle(null)
    setChosenCg(null)
  }, [])

  return (
    <Wrapper selected={style} onClick={handleCatClick}>
      {group}
    </Wrapper>
  )
}

export default Category

import React, { useState, useEffect, useContext } from 'react'
import { Wrapper } from '@/components/Profile/ModalGames/Category/Category.styles'
import { GameContext } from '@/providers/GameProvider'

const Category = ({ group }) => {
  const { chosenCategory, setChosenCategory } = useContext(GameContext)
  const [style, setStyle] = useState(null)

  const handleCatClick = () => {
    setChosenCategory(group)
  }

  useEffect(() => {
    if (chosenCategory === group) {
      setStyle('selected')
    } else {
      setStyle(null)
    }
  }, [chosenCategory])

  useEffect(() => {
    setStyle(null)
    setChosenCategory(null)
  }, [])

  return (
    <Wrapper selected={style} onClick={handleCatClick}>
      {group}
    </Wrapper>
  )
}

export default Category

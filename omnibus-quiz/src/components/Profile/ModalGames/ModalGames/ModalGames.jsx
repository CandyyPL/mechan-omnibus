import React, { useContext } from 'react'
import { Wrapper } from '@/components/Profile/ModalGames/ModalGames/ModalGames.styles'
import { GameContext } from '@/providers/GameProvider'
import Category from '@/components/Profile/ModalGames/Category/Category'
import GameMode from '@/components/Profile/ModalGames/GameMode/GameMode'
import { gameModes } from '@/helpers/consts'
import { useState } from 'react'
import { useEffect } from 'react'

const ModalGames = () => {
  const { questionGroups } = useContext(GameContext)
  const [gms, setGms] = useState([])

  useEffect(() => {
    if (gameModes !== null || gameModes !== undefined) {
      let tempArr = []
      Object.entries(gameModes).forEach((arr) => tempArr.push(arr[1]))
      setGms(tempArr)
    }
  }, [])

  return (
    <Wrapper>
      <div className='gamemodeSelect'>
        {gms && gms.map((gm, idx) => <GameMode key={idx} mode={gm} />)}
      </div>
      <div className='categorySelect'>
        {questionGroups.length &&
          questionGroups.map((group, idx) => <Category key={idx} group={group} />)}
      </div>
    </Wrapper>
  )
}

export default ModalGames

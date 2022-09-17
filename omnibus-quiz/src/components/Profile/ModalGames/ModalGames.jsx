import React, { useContext, useState } from 'react'
import { Wrapper } from '@/components/Profile/ModalGames/ModalGames.styles'
import { GameContext } from '@/providers/GameProvider'

const ModalGames = () => {
  const { questionGroups } = useContext(GameContext)

  const [chosenGms, setChosenGms] = useState({
    g1: false,
    g2: false,
    g3: false,
    g4: false,
  })

  const [chosenCtg, setChosenCtg] = useState({
    c1: false,
    c2: false,
  })

  return (
    <Wrapper>
      <div className='gamemodeSelect'>
        <div className='gamemode' name='g1'>
          Klasyczny
        </div>
        {/* <div className='gamemode' name='g2'></div>
        <div className='gamemode' name='g3'></div>
        <div className='gamemode' name='g4'></div> */}
      </div>
      <div className='categorySelect'>
        {questionGroups.length &&
          questionGroups.map((group, idx) => (
            <div className='category' name={`c${idx}`} key={group}>
              {group}
            </div>
          ))}
      </div>
    </Wrapper>
  )
}

export default ModalGames

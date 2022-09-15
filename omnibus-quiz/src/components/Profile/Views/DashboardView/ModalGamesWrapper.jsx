import { Wrapper } from '@/components/Profile/Views/DashboardView/ModalGamesWrapper.styles'
import { GameContext } from '@/providers/GameProvider'
import React, { useContext } from 'react'

const ModalGamesWrapper = () => {
  const { questionGroups } = useContext(GameContext)

  return (
    <Wrapper>
      <div className='gamemodeSelect'>
        <div className='gamemode'>Klasyczny</div>
        {/* <div className='gamemode'></div>
        <div className='gamemode'></div>
        <div className='gamemode'></div> */}
      </div>
      <div className='categorySelect'>
        {questionGroups.length &&
          questionGroups.map((group) => (
            <div className='category' key={group}>
              {group}
            </div>
          ))}
      </div>
    </Wrapper>
  )
}

export default ModalGamesWrapper

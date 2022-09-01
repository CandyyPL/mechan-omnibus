import React from 'react'
import { StyledOptions, Wrapper } from 'components/ParticipantsListItem/ParticipantsListItem.styles'
import { useContext } from 'react'
import { ContentContext } from 'providers/ContentProvider'
import axios from 'axios'
import optionsImg from 'assets/options.png'
import { useState } from 'react'

const ParticipantsListItem = ({ item }) => {
  const { reloadContent } = useContext(ContentContext)

  const [optionsOpen, setOptionsOpen] = useState(false)

  const handleChangeUserState = async (state) => {
    try {
      await axios.post('http://localhost:5000/chstate', {
        userId: item.id,
        email: item.email,
        newState: state,
      })

      reloadContent()
      setOptionsOpen(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeleteUser = async () => {
    try {
      await axios.post('http://localhost:5000/deleteone', { delId: item.id })
      reloadContent()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Wrapper itemState={item.state}>
      <div>
        <span>{item.name}</span>
        <span>{item.email}</span>
        <span>{item.class}</span>
        <span>{item.profile}</span>
      </div>
      <div className='optionsDiv' onClick={() => setOptionsOpen((state) => !state)}>
        <img src={optionsImg} alt='options' />
      </div>
      {optionsOpen ? (
        <StyledOptions>
          <li className='approve' onClick={() => handleChangeUserState('approved')}>
            Approve
          </li>
          <li className='block' onClick={() => handleChangeUserState('blocked')}>
            Block
          </li>
          <li className='delete' onClick={handleDeleteUser}>
            Delete
          </li>
        </StyledOptions>
      ) : null}
    </Wrapper>
  )
}

export default ParticipantsListItem

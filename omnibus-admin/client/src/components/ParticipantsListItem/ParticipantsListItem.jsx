import React from 'react'
import { Wrapper } from 'components/ParticipantsListItem/ParticipantsListItem.styles'
import { useContext } from 'react'
import { ContentContext } from 'providers/ContentProvider'
import axios from 'axios'

const ParticipantsListItem = ({ item }) => {
  const { reloadContent } = useContext(ContentContext)

  const handleDeleteUser = async () => {
    try {
      await axios.post('http://localhost:4000/deleteone', { delId: item.id })
      reloadContent()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Wrapper>
      <div>
        <span>{item.name}</span>
        <span>{item.email}</span>
        <span>{item.class}</span>
        <span>{item.profile}</span>
      </div>
      <button onClick={handleDeleteUser}>USUŃ</button>
    </Wrapper>
  )
}

export default ParticipantsListItem

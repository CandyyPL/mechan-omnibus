import { Wrapper } from '@/components/ParticipantListItem/ParticipantListItem.styles'
import moment from 'moment'
import { FC, useContext } from 'react'
import axios from 'axios'
import { UsersContextType, UserType } from '@/@types/userContext'
import { UsersContext } from '@/providers/UsersProvider'

interface Props {
  item: UserType
}

const ParticipantListItem: FC<Props> = ({ item }) => {
  const { reloadUsers } = useContext(UsersContext) as UsersContextType

  const handleDeleteUser = async (id: string) => {
    await axios.post('http://localhost:4000/deleteone', { delId: id })
    reloadUsers()
  }

  return (
    <Wrapper>
      <h2>{item.name}</h2>
      <span>{item.email}</span>
      <span>{item.class}</span>
      <span>{item.profile}</span>
      <span>{moment(item.date).fromNow()}</span>
      <button onClick={() => handleDeleteUser(item.id)}>USUŃ</button>
    </Wrapper>
  )
}

export default ParticipantListItem

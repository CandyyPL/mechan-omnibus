import { List, Wrapper } from '@/components/ParticipantList/ParticipantList.styles'
import { FC, useContext } from 'react'
import ParticipantListItem from '@/components/ParticipantListItem/ParticipantListItem'
import { UsersContext } from '@/providers/UsersProvider'
import { UserType, UsersContextType } from '@/@types/userContext'

const ParticipantList: FC = () => {
  const { users, error, loading } = useContext(UsersContext) as UsersContextType

  return (
    <Wrapper>
      <List>
        {loading ? (
          <h1>Loading..</h1>
        ) : (
          <>
            {error == '' ? (
              <>
                {users.length > 0 ? (
                  users.map((u: UserType) => <ParticipantListItem item={u} key={u.id} />)
                ) : (
                  <h1>List is empty</h1>
                )}
              </>
            ) : (
              <h1>Internal server error</h1>
            )}
          </>
        )}
      </List>
    </Wrapper>
  )
}

export default ParticipantList

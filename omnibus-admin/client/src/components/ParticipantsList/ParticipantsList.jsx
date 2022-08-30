import React from 'react'
import { Wrapper } from 'components/ParticipantsList/ParticipantsList.styles'
import { useContext } from 'react'
import { ContentContext } from 'providers/ContentProvider'
import ParticipantsListItem from 'components/ParticipantsListItem/ParticipantsListItem'

const ParticipantsList = () => {
  const { content, loading, error } = useContext(ContentContext)

  return (
    <Wrapper>
      {error ? (
        <h1>Internal server error</h1>
      ) : (
        <>
          {loading ? (
            <h1>Loading..</h1>
          ) : (
            <>
              {content.length === 0 ? (
                <h1>List empty</h1>
              ) : (
                <>
                  {content.map((i) => (
                    <ParticipantsListItem item={i} key={i.id} />
                  ))}
                </>
              )}
            </>
          )}
        </>
      )}
    </Wrapper>
  )
}

export default ParticipantsList

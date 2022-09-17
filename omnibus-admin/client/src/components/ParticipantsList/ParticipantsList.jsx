import React, { useEffect } from 'react'
import { Wrapper } from '@/components/ParticipantsList/ParticipantsList.styles'
import { useContext } from 'react'
import { ContentContext } from '@/providers/ContentProvider'
import ParticipantsListItem from '@/components/ParticipantsListItem/ParticipantsListItem'
import { SearchContext } from '@/providers/SearchProvider'
import { useState } from 'react'

const ParticipantsList = () => {
  const { content, loading, error } = useContext(ContentContext)
  const { searchValue } = useContext(SearchContext)

  const [filteredContent, setFileredContent] = useState([])

  useEffect(() => {
    const filtered = content.filter((item) => {
      return (
        item.name.toUpperCase().includes(searchValue.toUpperCase()) ||
        item.email.toUpperCase().includes(searchValue.toUpperCase()) ||
        item.class.toUpperCase().includes(searchValue.toUpperCase()) ||
        item.profile.toUpperCase().includes(searchValue.toUpperCase())
      )
    })

    if (searchValue == '') setFileredContent(content)
    if (searchValue !== '') setFileredContent(filtered)
  }, [[], searchValue])

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
              {filteredContent.length === 0 ? (
                <h1>List empty</h1>
              ) : (
                <>
                  {filteredContent.map((i) => (
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

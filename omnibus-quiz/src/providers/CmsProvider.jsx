import React from 'react'
import { GraphQLClient, ClientContext } from 'graphql-hooks'

const CmsProvider = ({ children }) => {
  const client = new GraphQLClient({
    url: 'https://graphql.datocms.com/',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_DATO_CMS_API_KEY}`,
    },
  })

  return <ClientContext.Provider value={client}>{children}</ClientContext.Provider>
}

export default CmsProvider

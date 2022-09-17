import GlobalStyle from '@/assets/styles/GlobalStyle'
import AuthProvider from '@/providers/AuthProvider'
import GameProvider from '@/providers/GameProvider'
import CmsProvider from '@/providers/CmsProvider'
import React from 'react'

const AllProviders = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <CmsProvider>
          <GameProvider>{children}</GameProvider>
        </CmsProvider>
      </AuthProvider>
    </>
  )
}

export default AllProviders

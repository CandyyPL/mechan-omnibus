import GlobalStyle from '@/assets/styles/GlobalStyle'
import AuthProvider from '@/providers/AuthProvider'
import GameProvider from '@/providers/GameProvider'
import CmsProvider from '@/providers/CmsProvider'
import React from 'react'
import GamemodeProvider from '@/providers/GamemodeProvider'

const AllProviders = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <CmsProvider>
          <GameProvider>
            <GamemodeProvider>{children}</GamemodeProvider>
          </GameProvider>
        </CmsProvider>
      </AuthProvider>
    </>
  )
}

export default AllProviders

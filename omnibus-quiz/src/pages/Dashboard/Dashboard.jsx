import Topbar from 'components/Topbar/Topbar'
import { Text, Wrapper } from 'pages/Dashboard/Dashboard.styles'
import { AuthContext } from 'providers/AuthProvider'
import React, { useContext } from 'react'

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext)

  console.log(currentUser)

  return (
    <Wrapper>
      <Topbar />
      <Text>{currentUser.email}</Text>
    </Wrapper>
  )
}

export default Dashboard

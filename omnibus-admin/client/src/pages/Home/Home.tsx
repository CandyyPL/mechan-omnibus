import TopBar from '@/components/TopBar/TopBar'
import ParticipantList from '@/components/ParticipantList/ParticipantList'
import { Wrapper } from '@/pages/Home/Home.styled'
import UsersProvider from '@/providers/UsersProvider'
import { FC } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '@/auth/firebase'

const Home: FC = () => {
  const handleSignOut = () => {
    try {
      signOut(auth)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Wrapper>
      <TopBar>
        <span>OMNIBUS ADMIN</span>
        <button onClick={handleSignOut}>SIGN OUT</button>
      </TopBar>
      <UsersProvider>
        <ParticipantList />
      </UsersProvider>
    </Wrapper>
  )
}

export default Home

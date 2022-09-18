import React, { useState } from 'react'
import { RankingList, Wrapper } from '@/components/Profile/Views/Leaderboard/LeaderboardView.styles'
import RankingItem from '@/components/Profile/RankingItem/RankingItem'
import { useEffect } from 'react'
import { getData } from '@/db/dbMethods'
import { useContext } from 'react'
import { AuthContext } from '@/providers/AuthProvider'

const LeaderboardView = () => {
  const { currentUser } = useContext(AuthContext)

  const [ranking, setRanking] = useState([])

  useEffect(() => {
    getData().then((res) => {
      const ranking = res.data.users.filter((user) => user.ranking <= 20)
      setRanking(ranking)
    })
  }, [])

  return (
    <Wrapper>
      <h1>Ranking 20 najlepszych graczy</h1>
      <RankingList>
        {ranking &&
          ranking.length > 0 &&
          ranking.map((item) => <RankingItem key={item.id} item={item} />)}
      </RankingList>
    </Wrapper>
  )
}

export default LeaderboardView

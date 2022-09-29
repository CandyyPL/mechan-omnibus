import React, { useState } from 'react'
import {
  Empty,
  RankingList,
  Wrapper,
} from '@/components/Profile/Views/Leaderboard/LeaderboardView.styles'
import RankingItem from '@/components/Profile/RankingItem/RankingItem'
import { useEffect } from 'react'
import { getRanking } from '@/db/dbMethods'
import { useContext } from 'react'
import { AuthContext } from '@/providers/AuthProvider'

const LeaderboardView = () => {
  const { currentUser } = useContext(AuthContext)

  const [ranking, setRanking] = useState([])

  useEffect(() => {
    getRanking().then((res) => {
      console.log(res)
      const ranking = res.data.sortedRanking.filter((user) => user.ranking <= 20)
      setRanking(ranking)
    })
  }, [])

  return (
    <Wrapper>
      {ranking && ranking.length === 0 ? (
        <Empty>
          <h1>Brak danych</h1>
          <h3>Możesz być pierwszy!</h3>
        </Empty>
      ) : (
        <>
          <h1>Ranking 20 najlepszych graczy</h1>
          <RankingList>
            {ranking &&
              ranking.length > 0 &&
              ranking.map((item) => <RankingItem key={item.id} item={item} />)}
          </RankingList>
        </>
      )}
    </Wrapper>
  )
}

export default LeaderboardView

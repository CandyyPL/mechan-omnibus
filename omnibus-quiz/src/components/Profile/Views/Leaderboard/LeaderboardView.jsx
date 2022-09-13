import React from 'react'
import { RankingList, Wrapper } from '@/components/Profile/Views/Leaderboard/LeaderboardView.styles'
import RankingItem from '@/components/Profile/RankingItem/RankingItem'

const ranking = [
  {
    id: 0,
    name: 'Marcel Betański',
    ranking: 1,
    score: 12584,
    favSubject: 'Programowanie',
    uid: 'G1wWbKEbMzYDdyT905BucSQ5ZA03',
  },
  {
    id: 1,
    name: 'Marcin Molak',
    ranking: 2,
    score: 11538,
    favSubject: 'Grafika',
  },
  {
    id: 2,
    name: 'Damian Jaworski',
    ranking: 3,
    score: 10163,
    favSubject: 'Grafika',
  },
]

const LeaderboardView = () => {
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

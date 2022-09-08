import React from 'react'
import { RankingList, Wrapper } from '@/components/Profile/Views/Leaderboard/LeaderboardView.styles'
import RankingItem from '@/components/Profile/RankingItem/RankingItem'

const ranking = [
  {
    name: 'Marcel Betański',
    ranking: 1,
    score: 12584,
    favSubject: 'Programowanie',
    id: 0,
  },
  {
    name: 'Marcin Molak',
    ranking: 2,
    score: 11538,
    favSubject: 'Grafika',
    id: 1,
  },
  {
    name: 'Damian Jaworski',
    ranking: 3,
    score: 10163,
    favSubject: 'Grafika',
    id: 2,
  },
  {
    name: 'Kamil Kondracki',
    ranking: 4,
    score: 8452,
    favSubject: 'Geografia',
    id: 3,
  },
  {
    name: 'Tymoteusz Błaszczyk',
    ranking: 5,
    score: 8356,
    favSubject: 'Polityka',
    id: 4,
  },
  {
    name: 'Szymon Musiał',
    ranking: 6,
    score: 8041,
    favSubject: 'Matematyka',
    id: 5,
  },
  {
    name: 'Michał Zieliński',
    ranking: 7,
    score: 7538,
    favSubject: 'Wych. Fizyczne',
    id: 6,
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

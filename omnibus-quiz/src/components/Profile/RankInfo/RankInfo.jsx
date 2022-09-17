import React, { useEffect, useState } from 'react'
import { Wrapper } from '@/components/Profile/RankInfo/RankInfo.styles'
import { ranks } from '@/helpers/consts'
import { useContext } from 'react'
import { AuthContext } from '@/providers/AuthProvider'

const RankInfo = () => {
  const [currentRank, setCurrentRank] = useState(null)
  const [currentRankImg, setCurrentRankImg] = useState(null)
  const {
    mongoUser: { rank },
  } = useContext(AuthContext)

  useEffect(() => {
    const ranksArr = Object.entries(ranks)
    const name = ranksArr[rank][1].name
    const img = ranksArr[rank][1].img

    setCurrentRank(name)
    setCurrentRankImg(img)
  }, [])

  return (
    <Wrapper>
      <img src={currentRankImg} alt='rank' />
      {rank === 0 ? (
        <span>Poza rankingiem</span>
      ) : (
        <span>
          Ranga {rank}: {currentRank}
        </span>
      )}
    </Wrapper>
  )
}

export default RankInfo

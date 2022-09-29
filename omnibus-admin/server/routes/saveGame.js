import User from '../db/models/User.js'

export default async (req, res) => {
  const userId = req.body.uid
  const game = req.body.game

  const user = await User.findOne({ uid: userId })

  user.totalScore += game.score
  if (game.score) user.lastGame = game
  user.markModified('lastGame')
  await user.save()

  const rankingUsers = await User.find({ totalScore: { $gt: 0 } })
  console.log(rankingUsers)

  if (rankingUsers.length > 0) {
    rankingUsers.sort((a, b) => b.totalScore - a.totalScore)

    rankingUsers.forEach(async (user, idx) => {
      user.ranking = idx + 1
      await user.save()
    })
  }

  res.status(200).send({ express: 'Game saved!' })
}

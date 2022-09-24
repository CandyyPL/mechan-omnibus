import User from '../db/models/User.js'

export default async (req, res) => {
  const ranking = await User.find({ $and: [{ ranking: { $lt: 21 } }, { ranking: { $gt: 0 } }] })

  const sortedRanking = ranking.sort((a, b) => a.ranking - b.ranking)

  res.status(200).send({ expres: 'Got ranking', sortedRanking })
}

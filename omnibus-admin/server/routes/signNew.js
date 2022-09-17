import registration from '../db/models/User.js'
import { v4 } from 'uuid'

export default async (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const classNum = req.body.class
  const profile = req.body.profile

  const reg = new registration({
    id: v4(),
    uid: 'N/A',
    name,
    email,
    class: classNum,
    profile,
    state: 'blocked',
    ranking: 0,
    favSubject: 'N/A',
    totalScore: 0,
    rank: 0,
    level: 1,
    exp: 0,
    neededExp: 250,
    lastGame: {
      date: 'N/A',
      score: 0,
      answers: 0,
      subject: 'N/A',
    },
    regDate: Date.now(),
  })

  await reg.save()
  res.status(200).send({ express: 'User signed' })
}

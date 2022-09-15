import User from '../db/models/User.js'

export default async (req, res) => {
  const signId = req.body.userId
  const userEmail = req.body.email
  const newState = req.body.newState

  const dbRes = await User.find({ email: userEmail })

  console.log(dbRes)

  if (dbRes.length) {
    if (dbRes.state && dbRes.state == newState) {
      res.status(400).send({ express: 'Email exists with given state' })
      return
    }

    await User.updateOne({ id: signId }, { state: newState })
    res.status(200).send({ express: 'State changed' })
    return
  }

  const user = new User({ signId, email: userEmail, state: newState })
  await user.save()
  res.status(200).send({ express: 'State changed' })
}

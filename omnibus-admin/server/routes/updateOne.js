import User from '../db/models/User.js'

export default async (req, res) => {
  const userEmail = req.body.email
  const userId = req.body.uid
  const toUpdate = req.body.update

  await User.updateOne({ email: userEmail }, toUpdate)

  res.status(200).send({ express: 'User updated' })
}

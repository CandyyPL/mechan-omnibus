import User from '../db/models/User.js'

export default async (req, res) => {
  const updateId = req.body.id
  const toUpdate = req.body.update

  await User.updateOne({ id: updateId }, toUpdate)

  res.status(200).send({ express: 'User updated' })
}

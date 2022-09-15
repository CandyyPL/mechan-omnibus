import User from '../db/models/User.js'

export default async (req, res) => {
  const delId = req.body.delId

  await User.deleteOne({ id: delId })

  res.status(200).send({ express: 'deleted' })
}

import User from '../db/models/User.js'

export default async (req, res) => {
  const userId = req.body.uid

  const user = await User.findOne({ uid: userId })

  res.status(200).send({ express: 'Got user', user })
}

import User from '../db/models/User.js'

export default async (req, res) => {
  const users = await User.find({})

  res.status(200).send({ express: 'Got users', users: users })
}

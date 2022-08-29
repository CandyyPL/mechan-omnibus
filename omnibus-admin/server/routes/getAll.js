import registration from '../db/models/registration.js'

export default async (req, res) => {
  const users = await registration.find({})

  res.status(200).send({ express: 'got users', users })
}

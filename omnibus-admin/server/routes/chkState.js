import User from '../db/models/User.js'

export default async (req, res) => {
  const email = req.body.email

  const dbRes = await User.find({ email: email })

  if (dbRes.length) {
    res.status(200).send({ express: 'User found', state: dbRes[0].state })
    return
  }

  res.status(200).send({ express: 'No user found', state: null })
}

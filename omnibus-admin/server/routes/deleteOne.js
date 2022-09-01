import registration from '../db/models/Registration.js'
import User from '../db/models/User.js'

export default async (req, res) => {
  const delId = req.body.delId

  await registration.deleteOne({ id: delId })
  await User.deleteOne({ signId: delId })

  res.status(200).send({ express: 'deleted' })
}

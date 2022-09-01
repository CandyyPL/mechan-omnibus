import registration from '../db/models/Registration.js'
import { v4 } from 'uuid'

export default async (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const classNum = req.body.class
  const profile = req.body.profile

  const reg = new registration({
    id: v4(),
    name,
    email,
    class: classNum,
    profile,
    date: Date.now(),
  })

  await reg.save()
  res.status(200).send({ express: 'user signed' })
}

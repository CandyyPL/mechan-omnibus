import registration from '../db/models/registration.js'

export default async (req, res) => {
  const delId = req.body.delId

  await registration.deleteOne({ id: delId })

  res.status(200).send({ express: 'deleted' })
}

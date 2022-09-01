import registration from '../db/models/Registration.js'
import User from '../db/models/User.js'

export default async (req, res) => {
  const users = await registration.find({})

  const usersStates = await User.find({})

  const newUsers = []

  if (usersStates.length) {
    users.forEach((user) => {
      const found = usersStates.find((item) => item.email === user.email)

      const temp = {}

      if (found != undefined) {
        Object.assign(temp, { ...user._doc, state: found.state })
        newUsers.push(temp)
      }
    })
  } else {
    users.forEach((user) => newUsers.push(user))
  }

  res.status(200).send({ express: 'Got users', users: newUsers })
}

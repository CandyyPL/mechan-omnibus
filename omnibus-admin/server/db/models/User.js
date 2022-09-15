import mongoose from 'mongoose'
const { Schema } = mongoose

const UserSchema = new Schema({
  id: String,
  name: String,
  email: String,
  class: String,
  profile: String,
  state: String,
  regDate: String,
})

const User = mongoose.model('User', UserSchema)

export default User

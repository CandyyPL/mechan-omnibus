import mongoose from 'mongoose'
const { Schema } = mongoose

const UserSchema = new Schema({
  signId: String,
  email: String,
  state: String,
})

const User = mongoose.model('User', UserSchema)

export default User

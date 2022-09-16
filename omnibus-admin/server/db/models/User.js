import mongoose from 'mongoose'
const { Schema } = mongoose

const UserSchema = new Schema({
  uid: String,
  name: String,
  email: String,
  class: String,
  profile: String,
  state: String,
  ranking: Number,
  favSubject: String,
  totalScore: Number,
  rank: Number,
  lastGame: {
    date: String,
    score: Number,
    answers: Number,
    subject: String,
  },
  regDate: String,
})

const User = mongoose.model('User', UserSchema)

export default User

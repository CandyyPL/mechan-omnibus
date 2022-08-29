import mongoose from 'mongoose'
const { Schema } = mongoose

const registrationSchema = new Schema({
  id: String,
  name: String,
  email: String,
  class: String,
  profile: String,
  date: Number,
})

const registration = mongoose.model('Registration', registrationSchema)

export default registration

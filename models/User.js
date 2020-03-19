const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
  {
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    city: String,
    state: String,
    country: String,
    accountType: String,
    isAdmin: Boolean,
  },
  { collection: 'User' },
)

mongoose.model('User', userSchema)

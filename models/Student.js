const mongoose = require('mongoose')
const { Schema } = mongoose

const studentSchema = new Schema(
  {
    id: Number,
    first_name: String,
    last_name: String,
    gender: String,
  },
  { collection: 'Student' },
)

mongoose.model('Student', studentSchema)

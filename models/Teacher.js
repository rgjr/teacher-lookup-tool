const mongoose = require('mongoose')
const { Schema } = mongoose

const teacherSchema = new Schema(
  {
    id: Number,
    userId: Number,
    schoolDistrict: String,
    students: Array
  },
  { collection: 'Teacher' },
)

mongoose.model('Teacher', teacherSchema)

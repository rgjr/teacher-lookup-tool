const mongoose = require('mongoose')
const { Schema } = mongoose

const teacherSchema = new Schema(
  {
    id: String,
    userId: String,
    schoolDistrict: String,
    students: [String]
  },
  { collection: 'Teacher' },
)

mongoose.model('Teacher', teacherSchema)

const express = require('express')
const mongoose = require('mongoose')
require('./models/Student')
require('./models/Teacher')
require('./models/User')

const app = express()
require('./routes/lookup')(app)

mongoose.connect('mongodb://127.0.0.1:27017/db_data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.listen(8000)

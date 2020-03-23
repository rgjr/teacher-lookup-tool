const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('./models/Student')
require('./models/Teacher')
require('./models/User')

const app = express()
app.use(cors())
require('./routes/lookup')(app)
require('./db_data/import')(app)

mongoose.connect('mongodb://127.0.0.1:27017/db_data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.listen(8000)

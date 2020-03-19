const express = require('express')
const app = express()
require('./routes/lookup')(app)

app.listen(8000)

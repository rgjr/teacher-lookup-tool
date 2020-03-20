const mongodb = require('mongodb').MongoClient
const csvtojson = require('csvtojson')
const path = require('path')

let url = 'mongodb://localhost:27017/'

module.exports = app => {
  app.get('/import/:fileName', (req, res) => {
    res.send(importData(`${req.params.fileName}`))
  })
}

function importData(fileName) {
  const file = `${__dirname}/${fileName}.csv`

  csvtojson()
    .fromFile(file)
    .then(csvData => {
      mongodb.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) {
          console.log(err)

          throw err
        }

        client
          .db('db_data')
          .collection(`${fileName}`)
          .insertMany(csvData, (err, res) => {
            if (err) throw err

            console.log(`Inserted: ${res.insertedCount} rows`)
            client.close()
          })
      })
    })

  return `imported ${fileName}`
}
